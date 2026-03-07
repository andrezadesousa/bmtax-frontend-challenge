import { Cloud, CloudOff, MapPin, Thermometer } from "lucide-react";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY as string;

type WeatherData = {
  city: string;
  temp: number;
  description: string;
};

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`,
          );

          if (!res.ok) throw new Error();

          const data = await res.json();

          setWeather({
            city: data.name,
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
          });
        } catch {
          setError(true);
        }
      },
      () => setError(true),
    );
  }, []);

  if (error) {
    return (
      <div className="flex items-center gap-1.5 text-surface-light/50 text-xxs mt-1">
        <CloudOff size={12} />
        <span>Clima indisponível</span>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex items-center gap-1.5 text-surface-light/50 text-xxs mt-1 animate-pulse">
        <Cloud size={12} />
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 mt-1 text-surface-light text-xxs">
      <div className="flex items-center gap-1">
        <MapPin size={11} className="shrink-0" />
        <span>{weather.city}</span>
      </div>
      <span className="opacity-40">·</span>
      <div className="flex items-center gap-1">
        <Thermometer size={11} className="shrink-0" />
        <span>{weather.temp}°C</span>
      </div>
    </div>
  );
}
