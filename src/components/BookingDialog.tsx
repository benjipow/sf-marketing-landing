import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format, addDays, startOfDay } from "date-fns";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VIBE_API_URL = "https://backend.leadconnectorhq.com/vibe-ai";
const LOCATION_ID = "UrtSUZP8lUbC6kubja9Z";
const CALENDAR_ID = "JOPTvyXLvscfYrI3cxZH";

interface SlotData {
  [date: string]: {
    slots: string[];
  };
}

export function BookingDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slots, setSlots] = useState<SlotData>({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    if (!open) return;

    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        const today = startOfDay(new Date());
        const startDate = today.getTime();
        const endDate = addDays(today, 31).getTime();
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const res = await fetch(
          `${VIBE_API_URL}/calendars/${CALENDAR_ID}/free-slots?startDate=${startDate}&endDate=${endDate}&timezone=${timezone}`,
        );
        if (!res.ok) throw new Error("Failed to fetch slots");
        const data = await res.json();
        setSlots(data);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Could not load available slots.",
          variant: "destructive",
        });
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [open, toast]);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedSlot(null);
  };

  const selectedDateStr = date ? format(date, "yyyy-MM-dd") : null;
  const availableSlots = selectedDateStr
    ? slots[selectedDateStr]?.slots || []
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      toast({
        title: "Error",
        description: "Please select a time slot.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        locationId: LOCATION_ID,
        calendarId: CALENDAR_ID,
        ...formData,
        selectedSlot,
        selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        sessionId: crypto.randomUUID(),
      };

      const res = await fetch(`${VIBE_API_URL}/booking/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Booking failed");

      toast({ title: "Success!", description: "Your call has been booked." });
      setOpen(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
      setSelectedSlot(null);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to book your call. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[800px] border-border bg-card text-card-foreground p-0 overflow-hidden">
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-serif">
              Book a Strategy Call
            </DialogTitle>
            <DialogDescription className="text-base mt-2">
              Select a date and time that works for you, and fill in your
              details.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(d) =>
                  d < startOfDay(new Date()) || d > addDays(new Date(), 31)
                }
                className="rounded-xl border border-border/50 p-3 bg-background/50"
              />
              <div className="space-y-3">
                <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Available Times
                </Label>
                {loadingSlots ? (
                  <div className="flex items-center justify-center py-10 bg-background/30 rounded-xl border border-border/50">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : availableSlots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={selectedSlot === slot ? "default" : "outline"}
                        className={`w-full border-border/50 transition-all ${selectedSlot === slot ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" : "hover:bg-accent/10 hover:text-accent hover:border-accent/50"}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {format(new Date(slot), "h:mm a")}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground py-8 text-center border border-dashed border-border/50 rounded-xl bg-background/30">
                    No slots available for this date.
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    First Name
                  </Label>
                  <Input
                    required
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, firstName: e.target.value }))
                    }
                    className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Last Name
                  </Label>
                  <Input
                    required
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, lastName: e.target.value }))
                    }
                    className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  required
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, email: e.target.value }))
                  }
                  className="bg-background/50 border-border/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Phone
                </Label>
                <Input
                  required
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="bg-background/50 border-border/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="notes"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="bg-background/50 border-border/50 focus-visible:ring-primary min-h-[100px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm font-semibold tracking-widest uppercase rounded-full mt-4 shadow-lg shadow-primary/20"
                disabled={!selectedSlot || submitting}
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                {submitting ? "Booking..." : "Confirm Booking"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
