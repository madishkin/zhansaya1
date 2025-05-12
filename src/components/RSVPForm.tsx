
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const RSVPForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !attendance) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Здесь будет код для отправки данных в Google Sheets
      // Пока имитируем отправку с задержкой
      await fetch("https://script.google.com/macros/s/AKfycbzB_s15oa6Y_9YT8DCsxEhVS64rF3zr0qfweAffnuED8IVijrCx0mVtWI52JEYMbOsF/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          attendance,
        }),
      });


      toast({
        title: "Спасибо!",
        description: "Ваш ответ успешно отправлен",
      });
      
      setName("");
      setAttendance("");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить ваш ответ. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 md:p-6 rounded-xl shadow-md border border-kazakh-gold/20">
      <h2 className="text-xl md:text-2xl font-dancing text-center mb-4 md:mb-6 text-kazakh-blue">RSVP</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div>
          <Label htmlFor="name" className="text-kazakh-darkBlue text-sm md:text-base">Ваше имя</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-kazakh-gold/30 focus:border-kazakh-gold focus:ring-kazakh-gold mt-1"
            placeholder="Введите ваше имя"
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-kazakh-darkBlue text-sm md:text-base">Ваш ответ</Label>
          <RadioGroup value={attendance} onValueChange={setAttendance} className="mt-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" className="text-kazakh-gold" />
              <Label htmlFor="yes" className="text-sm md:text-base">Я приду</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes_with_pair" id="yes_with_pair" className="text-kazakh-gold" />
              <Label htmlFor="yes_with_pair" className="text-sm md:text-base">Я приду с парой</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" className="text-kazakh-gold" />
              <Label htmlFor="no" className="text-sm md:text-base">К сожалению, не смогу прийти</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button
          type="submit"
          className="bg-kazakh-blue hover:bg-kazakh-darkBlue text-white w-full text-sm md:text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить ответ"}
        </Button>
      </form>
    </div>
  );
};

export default RSVPForm;
