'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function ProgramarePage() {
    const { cartItems, cartTotal, removeFromCart } = useCart();

    const handleGuestCheckout = () => {
        // Placeholder for guest checkout logic
        console.log('Proceeding as guest');
        alert('Funcționalitate în lucru: Programare Rapidă (Fără Cont)');
    };

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-primary">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Column: Cart Summary */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold text-primary mb-6 border-b pb-4">
                        Serviciile Tale
                    </h2>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">Coșul tău este gol.</p>
                            <Link href="/">
                                <Button variant="outline">Vezi Servicii</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={`${item.id}-${item.volume}`} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0">
                                    {/* Image placeholder if available, or generic icon */}
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                                        {/* Ideally pass imageSrc in context, for now placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-primary text-lg">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">Volum: {item.volume}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">
                                                {item.quantity} x {item.price} Lei
                                            </span>
                                            <span className="font-bold text-primary">
                                                {item.total} Lei
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id, item.volume)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                        aria-label="Sterge din cos"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            ))}

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center text-xl font-bold text-primary">
                                    <span>Total Estimativ:</span>
                                    <span>{cartTotal} Lei</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    *Prețul final poate varia în funcție de locație și servicii adiționale.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Auth Options */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-primary mb-2">Cum dorești să continui?</h2>
                        <p className="text-gray-600 mb-8">Alege modalitatea de programare care ți se potrivește.</p>

                        <div className="space-y-4">
                            {/* Option 1: Guest */}
                            <button
                                onClick={handleGuestCheckout}
                                className="w-full text-left p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all group flex items-center justify-between"
                            >
                                <div>
                                    <div className="font-bold text-lg text-primary group-hover:text-primary mb-1">
                                        Programează Rapid (Fără Cont)
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Completează doar datele esențiale pentru programare.
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </div>
                            </button>

                            {/* Option 2: Login/Register */}
                            <Link href="/login" className="block w-full">
                                <div className="w-full text-left p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-lg text-primary mb-1">
                                            Autentificare / Înregistrare
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Ai deja cont? Intră în cont pentru a salva istoricul.
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </div>
                                </div>
                            </Link>

                            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 flex gap-3">
                                <div className="text-blue-500 flex-shrink-0 mt-0.5">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="text-sm text-blue-800">
                                    Prin crearea unui cont, vei putea accesa istoricul tratamentelor, facturile și vei beneficia de oferte personalizate.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
