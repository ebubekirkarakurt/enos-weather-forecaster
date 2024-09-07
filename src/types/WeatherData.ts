export type WeatherData = {
    city_name: string;
    country_code: string;
    data: Array<{
        lat: string;
        lon: string;
        // Diğer alanlar burada tanımlanabilir
    }>;
    lat: string;
    lon: string;
    state_code: string;
    timezone: string;
};