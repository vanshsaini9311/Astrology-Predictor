const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You have a naturally confident personality.",
    "Your positive energy attracts people around you.",
    "You are more capable than you sometimes realize.",
    "People appreciate your honesty and loyalty.",
    "You have a creative mind and unique ideas.",
    "Your determination helps you overcome challenges.",
    "You have a strong and inspiring personality.",
    "Your kindness makes people feel comfortable around you.",
    "You have excellent potential for success.",
    "You are someone people can depend on.",
    "Your confidence can inspire others.",
    "You have a naturally charming personality.",
    "Your patience is one of your greatest strengths.",
    "You have a sharp and observant mind.",
    "Your sense of humor makes you memorable.",
    "You bring positive energy into difficult situations.",
    "You have strong leadership qualities.",
    "Your hardworking nature will take you far.",
    "You are emotionally stronger than you think.",
    "Your ability to learn quickly is impressive.",
    "You have a warm and friendly personality.",
    "Your determination is truly admirable.",
    "You are naturally good at motivating others.",
    "Your ideas can make a real difference.",
    "You have a strong sense of responsibility.",
    "Your loyalty is highly valued by others.",
    "You can turn challenges into opportunities.",
    "Your confidence makes your personality shine.",
    "You have a thoughtful and caring nature.",
    "Your ambition can help you achieve big goals.",
    "You have a unique personality that people remember."
];

const recommendations = [
    "Take some time today to relax and recharge.",
    "Try learning something new this week.",
    "Spend quality time with people who support you.",
    "Focus on one important goal at a time.",
    "Avoid making decisions when you are emotionally stressed.",
    "Start your day with a positive routine.",
    "Take a short break when you feel overwhelmed.",
    "Write down your goals and work on them consistently.",
    "Try a creative activity to refresh your mind.",
    "Listen carefully before responding to others.",
    "Give yourself time before making an important decision.",
    "Stay consistent with your studies or work.",
    "Try to maintain a healthy sleep schedule.",
    "Explore a new hobby or interest.",
    "Keep your priorities clear.",
    "Spend less time worrying about things you cannot control.",
    "Celebrate small achievements along the way.",
    "Be open to advice from people you trust.",
    "Take care of your physical and mental well-being.",
    "Believe in your progress and keep moving forward."
];

const predictions = [
    "A new opportunity may appear when you least expect it.",
    "You may receive positive news soon.",
    "Your hard work could start showing visible results.",
    "A meaningful conversation may change your perspective.",
    "You may discover a new interest or talent.",
    "Someone from your past may contact you.",
    "The coming days may bring an opportunity to learn something valuable.",
    "You could experience progress in an important personal goal.",
    "A small decision may lead to a useful opportunity.",
    "You may feel more confident about your future soon.",
    "A new connection could become important to you.",
    "Your patience may be rewarded with positive results.",
    "You may overcome a challenge that has been bothering you.",
    "An unexpected opportunity may come your way.",
    "You could make progress in your studies or career.",
    "A change in your routine may bring positive energy.",
    "You may receive helpful advice from someone close to you.",
    "A difficult situation may become easier to handle.",
    "You may find clarity about an important decision.",
    "The coming period may bring new possibilities for personal growth."
];

const form = document.getElementById('astroForm');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById('firstName').value;
    const surname =document.getElementById('surname').value;
    const Day =parseInt(document.getElementById('day').value);
    const Month =parseInt(document.getElementById('month').value);
    const Year =parseInt(document.getElementById('year').value);



   
   const text = `Hi.${name} ${surname},Your Zodiac Sign is ${zodiacSigns[Month-1]}.${compliments[Day-1]}.${recommendations[(name.length*surname.length)%20]}.${predictions[Year%20]}`;
    const result =document.getElementById('resultText');
    result.textContent = text;
    form.reset();
    
})