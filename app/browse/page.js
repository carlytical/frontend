import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';

export default function BrowsePage() {
    // Duplicate cars to show a full grid
    const allCars = [...cars, ...cars];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <FilterBar />

            <div className="container-custom py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse All Cars</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCars.map((car, index) => (
                        <CarCard key={`${car.id}-${index}`} car={car} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
