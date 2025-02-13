const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "सपने वो नहीं जो हम सोते समय देखते हैं, सपने वो हैं जो हमें सोने नहीं देते। — ए. पी. जे. अब्दुल कलाम",
    "हार मत मानो, हमेशा अगला प्रयास ही सफलता की कुंजी होता है।",
    "यदि आप खुद पर विश्वास करते हैं, तो कुछ भी संभव है।",
    "असफलता केवल एक अवसर है, फिर से शुरुआत करने का।",
    "जो अपने कदमों की काबिलियत पर विश्वास रखते हैं, वही अक्सर मंज़िल तक पहुँचते हैं।",
    "हर दिन एक नया अवसर है, इसे पूरी लगन से जियो।",
    "मुश्किलों से डरकर अपने लक्ष्य को मत छोड़ो, क्योंकि सफलता उन्हीं को मिलती है जो निरंतर प्रयास करते हैं।",
    "सही दिशा में उठाया गया एक छोटा कदम भी बड़ी सफलता की ओर ले जाता है।",
    "खुद को कमजोर समझना सबसे बड़ा पाप है। — स्वामी विवेकानंद",
    "जब तक आप खुद पर विश्वास नहीं करेंगे, तब तक आप अपनी जिंदगी नहीं बदल सकते।",
    "समय और शिक्षा का सही उपयोग ही व्यक्ति को सफल बनाता है।",
    "लोग क्या कहेंगे, यह सोचकर जीवन जीना छोड़ दें, क्योंकि लोग तो तब भी कुछ कहेंगे जब आप सफल होंगे।",
    "कठिनाइयाँ जीवन का हिस्सा हैं, इनसे घबराकर नहीं, बल्कि सीखकर आगे बढ़ना चाहिए।",
    "हर बड़ा बदलाव पहले छोटे कदम से शुरू होता है।",
    "कभी हार मत मानो, याद रखो कि एक दिन तुम्हारी कहानी किसी को प्रेरित करेगी।",
    "सच्ची सफलता वही है जो खुद को और दूसरों को खुश रख सके।",
    "सपनों को हकीकत में बदलने के लिए मेहनत की जरूरत होती है।",
    "आपका सबसे बड़ा शिक्षक आपकी गलतियाँ होती हैं।",
    "जिंदगी एक किताब की तरह है, हर दिन एक नया पन्ना होता है, इसे अच्छे से लिखो।",
    "जो मेहनत करने से पीछे हट जाता है, सफलता भी उससे पीछे हट जाती है।"
  ];
  


function generatQuote(){  
const text = document.getElementById("quote");


const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}
setInterval(generatQuote,2000);



