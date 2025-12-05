'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '@/lib/features/cart/cartSlice';
import { FaTimes, FaRegTrashAlt } from 'react-icons/fa';

export default function CartDrawer({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const subtotal = cartItems.reduce((acc, item) => {
        // Handle both numeric and string prices
        const price = typeof item.price === 'number' ? item.price : parseInt(item.price.replace(/[^0-9]/g, ''));
        const quantity = item.quantity || 1;
        return acc + (price * quantity);
    }, 0);

    const clearCart = () => {
        cartItems.forEach(item => dispatch(removeFromCart(item.id)));
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col">
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between bg-white">
                    <h2 className="text-xl font-semibold text-gray-900">My Cart ({cartItems.length})</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <FaRegTrashAlt className="w-6 h-6 text-gray-400" />
                            </div>
                            <p className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</p>
                            <p className="text-sm">Looks like you haven't added any cars yet.</p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Start Browsing
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    {/* Image */}
                                    <div className="w-36 h-28 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                        <img
                                            src={item.images[0]}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1 pr-2">
                                                    <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-tight">{item.name}</h3>
                                                    <p className="text-xs text-gray-500 leading-relaxed">
                                                        {item.pcp || 'PCP: £365/mo'} • Deposit: £2,000
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <FaRegTrashAlt className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Quantity Controls & Price */}
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                                    <button
                                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="px-4 py-1.5 text-sm font-medium text-gray-900 border-x border-gray-300 min-w-[3rem] text-center">
                                                        {item.quantity || 1}
                                                    </span>
                                                    <button
                                                        onClick={() => dispatch(incrementQuantity(item.id))}
                                                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div className="text-xl font-bold text-gray-900">
                                                    £{(typeof item.price === 'number' ? item.price * (item.quantity || 1) : parseInt(item.price.replace(/[^0-9]/g, '')) * (item.quantity || 1)).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 text-xs">
                                            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                                                Add to compare
                                            </button>
                                            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                                                Bookmark
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 px-8 py-6 bg-white">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-lg font-medium text-gray-900">Total:</span>
                            <span className="text-3xl font-bold text-gray-900">£{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={clearCart}
                                className="flex-1 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaRegTrashAlt className="w-4 h-4" />
                                Clear Cart
                            </button>
                            <button className="flex-1 py-3.5 bg-[#0066FF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
