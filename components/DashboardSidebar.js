'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FiHome, FiHeart, FiGitBranch, FiPackage, FiTruck, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';

export default function DashboardSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/');
    };

    const menuItems = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard', section: 'Main' },
        { name: 'Saved Cars', icon: FiHeart, path: '/dashboard/saved-cars', section: 'Main' },
        { name: 'Comparisons', icon: FiGitBranch, path: '/dashboard/comparisons', section: 'Main' },
        { name: 'Purchase History', icon: FiPackage, path: '/dashboard/purchases', section: 'Main' },
        { name: 'Delivery Tracker', icon: FiTruck, path: '/dashboard/delivery', section: 'Main' },
    ];

    const accountItems = [
        { name: 'Account Settings', icon: FiSettings, path: '/dashboard/settings', section: 'Account' },
        { name: 'Support', icon: FiHelpCircle, path: '/dashboard/support', section: 'Account' },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col font-sans">
            {/* Logo */}
            <div className="p-6 mb-2">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-900 leading-none text-base">Carlytical</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Platform</span>
                    </div>
                </Link>
            </div>

            {/* Main Menu */}
            <div className="flex-1 px-4">
                <div className="mb-2 px-2">
                    <h3 className="text-xs font-medium text-gray-400">Main</h3>
                </div>
                <nav className="space-y-0.5 mb-8">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Account Section */}
                <div className="mb-2 px-2">
                    <h3 className="text-xs font-medium text-gray-400">Account</h3>
                </div>
                <nav className="space-y-0.5">
                    {accountItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                        <FiLogOut className="w-5 h-5 text-gray-400" />
                        Logout
                    </button>
                </nav>
            </div>

            {/* User Profile at Bottom */}
            <div className="p-4 mt-auto">
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shrink-0">
                        {/* Placeholder for user image if available, else initials */}
                        <span className="font-medium text-sm">
                            {typeof window !== 'undefined' && localStorage.getItem('user')
                                ? JSON.parse(localStorage.getItem('user')).firstName?.charAt(0) || 'U'
                                : 'U'}
                        </span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">
                            {typeof window !== 'undefined' && localStorage.getItem('user')
                                ? `${JSON.parse(localStorage.getItem('user')).firstName} ${JSON.parse(localStorage.getItem('user')).lastName}`
                                : 'User'}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                            {typeof window !== 'undefined' && localStorage.getItem('user')
                                ? JSON.parse(localStorage.getItem('user')).email
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
