// Screen ထဲရောက်မှ ပေါ်လာစေမယ့် Animation လုပ်ဆောင်ချက်
const observerOptions = {
    threshold: 0.2 // Section ရဲ့ ၂၀ ရာခိုင်နှုန်း screen ထဲရောက်မှ animation စမယ်
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Screen ထဲရောက်ရင် 'appear' ဆိုတဲ့ class ကို ထည့်ပေးလိုက်တာ
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

// '.fade-in' class ပေးထားတဲ့ element အားလုံးကို စောင့်ကြည့်ခိုင်းမယ်
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));