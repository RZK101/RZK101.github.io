// Subscription Page Logic

function selectPlan(planType) {
    const plans = {
        'monthly': {
            name: 'Bulanan',
            price: 'Rp 29.900',
            period: 'bulan'
        },
        'yearly': {
            name: 'Tahunan',
            price: 'Rp 299.000',
            period: 'tahun'
        }
    };
    
    const selectedPlan = plans[planType];
    
    // Show confirmation message
    alert(`Anda memilih paket ${selectedPlan.name} seharga ${selectedPlan.price}/${selectedPlan.period}.\n\nTerima kasih atas minat Anda! Sistem pembayaran akan segera diarahkan.`);
    
    // Here you would typically redirect to a payment gateway
    // For now, we'll show a success message
    console.log(`Selected plan: ${planType}`);
}

// Add hover effects to pricing cards
document.addEventListener('DOMContentLoaded', () => {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            pricingCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            pricingCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });
});
