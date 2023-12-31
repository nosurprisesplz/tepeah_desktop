import {Timestamp} from "firebase/firestore";

interface Location {
    id : number,
    country : string,
    province : string
}

const locationsArray : Location[] = [
    { id: 1, country: 'Canada', province: 'Alberta' },
    { id: 2, country: 'Argentina', province: 'Buenos Aires' },
    { id: 3, country: 'United States', province: 'California' },
    { id: 4, country: 'Canada', province: 'Quebec' },
    { id: 5, country: 'Australia', province: 'New South Wales' },
    { id: 6, country: 'Canada', province: 'British Columbia' },
    { id: 7, country: 'South Africa', province: 'Gauteng' },
    { id: 8, country: 'Japan', province: 'Tokyo' },
    { id: 9, country: 'Canada', province: 'Ontario' },
    { id: 10, country: 'Germany', province: 'North Rhine-Westphalia' },
    { id: 11, country: 'United States', province: 'Florida' },
    { id: 12, country: 'Italy', province: 'Lombardy' },
    { id: 13, country: 'Brazil', province: 'São Paulo' },
    { id: 14, country: 'Russia', province: 'Moscow' },
    { id: 15, country: 'Turkey', province: 'Istanbul' },
    { id: 16, country: 'China', province: 'Sichuan' },
    { id: 17, country: 'United States', province: 'Texas' },
    { id: 18, country: 'South Africa', province: 'KwaZulu-Natal' },
    { id: 19, country: 'United States', province: 'New York' },
    { id: 20, country: 'Australia', province: 'Victoria' },
    { id: 21, country: 'India', province: 'Punjab' },
    { id: 22, country: 'Canada', province: 'Quebec' },
    { id: 23, country: 'Pakistan', province: 'Balochistan' },
    { id: 24, country: 'South Africa', province: 'Western Cape' },
    { id: 25, country: 'Argentina', province: 'Buenos Aires' },
    { id: 26, country: 'Canada', province: 'Alberta' },
    { id: 27, country: 'United States', province: 'Ohio' },
    { id: 28, country: 'South Africa', province: 'Gauteng' },
    { id: 29, country: 'China', province: 'Shandong' },
    { id: 30, country: 'Indonesia', province: 'Jakarta' },
    { id: 31, country: 'Egypt', province: 'Cairo' },
    { id: 32, country: 'Pakistan', province: 'Punjab' },
    { id: 33, country: 'Australia', province: 'Queensland' },
    { id: 34, country: 'China', province: 'Liaoning' },
    { id: 35, country: 'Germany', province: 'Bavaria' },
    { id: 36, country: 'Peru', province: 'Lima' },
    { id: 37, country: 'Canada', province: 'Alberta' },
    { id: 38, country: 'Australia', province: 'New South Wales' },
    { id: 39, country: 'Iran', province: 'Tehran' },
    { id: 40, country: 'Turkey', province: 'Istanbul' },
    { id: 41, country: 'Indonesia', province: 'Central Java' },
    { id: 42, country: 'Canada', province: 'Ontario' },
    { id: 43, country: 'Brazil', province: 'Rio de Janeiro' },
    { id: 44, country: 'United States', province: 'New York' },
    { id: 45, country: 'Canada', province: 'British Columbia' },
    { id: 46, country: 'Russia', province: 'Moscow' },
    { id: 47, country: 'Italy', province: 'Lombardy' },
    { id: 48, country: 'Argentina', province: 'Buenos Aires' },
    { id: 49, country: 'United States', province: 'California' },
    { id: 50, country: 'South Africa', province: 'Gauteng' },
    { id: 51, country: 'Victoria', province: 'Canada' },
    { id: 52, country: 'Punjab', province: 'India' },
    { id: 53, country: 'Newfoundland and Labrador', province: 'Canada' },
    { id: 54, country: 'Western Australia', province: 'Australia' },
    { id: 55, country: 'North Carolina', province: 'United States' },
    { id: 56, country: 'Johannesburg', province: 'South Africa' },
    { id: 57, country: 'Jiangsu', province: 'China' },
    { id: 58, country: 'Tokyo', province: 'Japan' },
    { id: 59, country: 'Quebec', province: 'Canada' },
    { id: 60, country: 'Bavaria', province: 'Germany' },
    { id: 61, country: 'Andalusia', province: 'Spain' },
    { id: 62, country: 'New South Wales', province: 'Australia' },
    { id: 63, country: 'Istanbul', province: 'Turkey' },
    { id: 64, country: 'Gujarat', province: 'India' },
    { id: 65, country: 'Buenos Aires', province: 'Argentina' },
    { id: 66, country: 'North Holland', province: 'Netherlands' },
    { id: 67, country: 'Hubei', province: 'China' },
    { id: 68, country: 'São Paulo', province: 'Brazil' },
    { id: 69, country: 'Moscow', province: 'Russia' },
    { id: 70, country: 'Texas', province: 'United States' },
    { id: 71, country: 'Shandong', province: 'China' },
    { id: 72, country: 'Ontario', province: 'Canada' },
    { id: 73, country: 'Quebec', province: 'Canada' },
    { id: 74, country: 'Cairo', province: 'Egypt' },
    { id: 75, country: 'Western Cape', province: 'South Africa' },
    { id: 76, country: 'British Columbia', province: 'Canada' },
    { id: 77, country: 'Lombardy', province: 'Italy' },
    { id: 78, country: 'Florida', province: 'United States' },
    { id: 79, country: 'Jakarta', province: 'Indonesia' },
    { id: 80, country: 'Punjab', province: 'Pakistan' },
    { id: 81, country: 'New York', province: 'United States' },
    { id: 82, country: 'Sichuan', province: 'China' },
    { id: 83, country: 'Alberta', province: 'Canada' },
    { id: 84, country: 'Victoria', province: 'Australia' },
    { id: 85, country: 'Tehran', province: 'Iran' },
    { id: 86, country: 'Rio de Janeiro', province: 'Brazil' },
    { id: 87, country: 'Central Java', province: 'Indonesia' },
    { id: 88, country: 'Ohio', province: 'United States' },
    { id: 89, country: 'KwaZulu-Natal', province: 'South Africa' },
    { id: 90, country: 'Buenos Aires', province: 'Argentina' },
    { id: 91, country: 'Karnataka', province: 'India' },
    { id: 92, country: 'New South Wales', province: 'Australia' },
    { id: 93, country: 'Liaoning', province: 'China' },
    { id: 94, country: 'Istanbul', province: 'Turkey' },
    { id: 95, country: 'Bavaria', province: 'Germany' },
    { id: 96, country: 'Ontario', province: 'Canada' },
    { id: 97, country: 'Moscow', province: 'Russia' },
    { id: 98, country: 'Western Australia', province: 'Australia' },
    { id: 99, country: 'Tehran', province: 'Iran' },
    { id: 100, country: 'Gauteng', province: 'South Africa' },
];

type FlightStatus = 'delayed' | 'arrived' | 'in-transit' | 'cancelled'

interface Flight {
    flightID : string,
    source : Location,
    destination : Location,
    boardingTime :  Timestamp,
    duration : number,
    planeID : string,
    passengerIDs : string[],
    crewID : string | null,
    baggageIDs : string[],
    status : FlightStatus
}

export default locationsArray
export type { Flight, Location } 
