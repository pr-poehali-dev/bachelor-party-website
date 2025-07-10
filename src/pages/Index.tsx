import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    email: "",
    attendance: "",
    message: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const photoUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setUploadedPhotos((prev) => [...prev, ...photoUrls]);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP данные:", rsvpData);
    setIsRsvpOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/img/22d5bfa5-05f3-4a23-a4ae-2d43ce2da178.jpg)",
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            МАЛЬЧИШНИК
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 font-light">
            Официальное приглашение на торжественное мероприятие
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-200 font-semibold px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("event-details")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Подробности
            </Button>
            <Dialog open={isRsvpOpen} onOpenChange={setIsRsvpOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg"
                >
                  Подтвердить участие
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event-details" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            О мероприятии
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-slate-200">
              <CardHeader>
                <Icon
                  name="Calendar"
                  size={48}
                  className="mx-auto mb-4 text-slate-700"
                />
                <CardTitle className="text-slate-900">Дата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">25 августа 2024</p>
                <p className="text-slate-600">19:00</p>
              </CardContent>
            </Card>

            <Card className="text-center border-slate-200">
              <CardHeader>
                <Icon
                  name="MapPin"
                  size={48}
                  className="mx-auto mb-4 text-slate-700"
                />
                <CardTitle className="text-slate-900">Место</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Ресторан "Метрополь"</p>
                <p className="text-slate-600">ул. Театральная, 1</p>
              </CardContent>
            </Card>

            <Card className="text-center border-slate-200">
              <CardHeader>
                <Icon
                  name="Shirt"
                  size={48}
                  className="mx-auto mb-4 text-slate-700"
                />
                <CardTitle className="text-slate-900">Дресс-код</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Деловой костюм</p>
                <p className="text-slate-600">Темные цвета</p>
              </CardContent>
            </Card>

            <Card className="text-center border-slate-200">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-slate-700"
                />
                <CardTitle className="text-slate-900">Участники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Только по приглашениям</p>
                <p className="text-slate-600">12 человек</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Программа вечера
            </h3>
            <div className="max-w-2xl mx-auto text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-slate-600 font-semibold">19:00</div>
                  <div className="text-slate-800">
                    Сбор гостей, приветственный коктейль
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-slate-600 font-semibold">20:00</div>
                  <div className="text-slate-800">Торжественный ужин</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-slate-600 font-semibold">22:00</div>
                  <div className="text-slate-800">
                    Развлекательная программа
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-slate-600 font-semibold">00:00</div>
                  <div className="text-slate-800">Завершение мероприятия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Галерея
          </h2>

          <div className="mb-12 text-center">
            <Label htmlFor="photo-upload" className="cursor-pointer">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                <Icon name="Upload" size={20} />
                Загрузить фотографии
              </div>
            </Label>
            <Input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </div>

          {uploadedPhotos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {uploadedPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={photo}
                    alt={`Загруженное фото ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="text-center text-slate-600">
            <p className="mb-4">Поделитесь своими фотографиями с мероприятия</p>
            <p className="text-sm">
              Все загруженные фотографии будут доступны участникам
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Dialog */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Подтверждение участия
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleRsvpSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Полное имя</Label>
            <Input
              id="name"
              value={rsvpData.name}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, name: e.target.value })
              }
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={rsvpData.email}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, email: e.target.value })
              }
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="attendance">Участие</Label>
            <select
              id="attendance"
              value={rsvpData.attendance}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, attendance: e.target.value })
              }
              required
              className="mt-1 w-full p-2 border border-slate-300 rounded-md"
            >
              <option value="">Выберите вариант</option>
              <option value="yes">Подтверждаю участие</option>
              <option value="no">Не смогу присутствовать</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Сообщение (опционально)</Label>
            <Textarea
              id="message"
              value={rsvpData.message}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, message: e.target.value })
              }
              rows={3}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800"
          >
            Отправить подтверждение
          </Button>
        </form>
      </DialogContent>
    </div>
  );
};

export default Index;
