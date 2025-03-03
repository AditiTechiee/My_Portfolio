
// Function to send a message
function sendMessage(event) {
    if (event && event.key !== "Enter" && event.type === "keypress") return;

    let messageInput = document.getElementById("chatInput");
    let messageText = messageInput.value.trim();

    if (messageText) {
        // User message
        let userMessageElement = document.createElement("p");
        userMessageElement.textContent = messageText;
        userMessageElement.classList.add("user");
        document.getElementById("chatMessages").appendChild(userMessageElement);

        messageInput.value = "";
        messageInput.focus();

    
        scrollToBottom();

        
        setTimeout(() => {
            let botMessageElement = document.createElement("p");
            botMessageElement.textContent = "" + autoReply(messageText);
            botMessageElement.classList.add("bot");
            document.getElementById("chatMessages").appendChild(botMessageElement);

            scrollToBottom();
        }, 1000);
    }
}


function autoReply(message) {
    const replies = {
          "default": "Sorry, I didn't understand that. Can you please rephrase?",
        "hi": "Hello! How can I help you?",
"hii": "Hello! How can I help you?",
"Hi": "Hello! How can I help you?",
"Hii": "Hello! How can I help you?",
"hello": "Hello! How can I help you?",
"hey": "Hey there! How can I assist you?",
"yo": "Yo! What’s up?",
"greetings": "Greetings! How can I assist you today?",
"howdy": "Howdy! What can I do for you today?",
"how are you": "I'm good, thanks for asking! How can I assist you today?",
"how's it going": "Going great! How can I help you?",
"what's up": "Not much, just here to help! What’s up with you?",
"what's going on": "Just hanging around, ready to help! How can I assist you?",
"good morning": "Good morning! How can I assist you today?",
"good afternoon": "Good afternoon! What can I do for you?",
"good evening": "Good evening! How can I help you?",
"good night": "Good night! Have a restful sleep, and take care!",
"bye": "Goodbye! Have a great day!",
"see you": "See you later! Take care!",
"catch you later": "Catch you later! Don’t hesitate to reach out again!",
"take care": "You too! Take care and have a wonderful day!",
"later": "Later! I’ll be here if you need anything.",
"thank you": "You're welcome! Let me know if you need anything else.",
"thanks": "You’re welcome! Always here to help.",
"thanks a lot": "You're very welcome! Feel free to reach out anytime.",
"thanks so much": "Glad to help! Let me know if you need more assistance.",
"you're welcome": "No problem at all! How else can I assist you?",
"no problem": "It’s my pleasure! Anything else I can do?",
"sorry": "No worries! What can I do for you?",
"excuse me": "Yes? How can I assist you?",
"please": "Of course! What can I do for you?",
"help": "I’m here to help! What do you need assistance with?",
"assistance": "Sure! What do you need help with?",
"can you help me": "Of course! What do you need help with?",
"could you help me": "Definitely! What can I assist you with?",
"I need help": "I’m ready to assist you! What’s the issue?",
"what can you do": "I can help with a variety of tasks! What would you like to do?",
"what can you do for me": "I can provide information, answer questions, and help with various tasks!",
"tell me more": "Sure! What would you like to know more about?",
"give me more information": "What topic would you like more information on?",
"who are you": "I’m your assistant, here to help you with anything you need!",
"what is your name": "I’m a friendly assistant here to assist you. I don’t have a personal name, but you can call me whatever you like!",
"are you a robot": "I’m an AI designed to help and interact with you. No physical robot here, just me in the digital world!",
"what do you do": "I can help with various tasks, answer questions, and provide assistance. How can I assist you today?",
"what's your purpose": "My purpose is to assist you with whatever you need. Whether it’s answering questions or helping you solve a problem, I’m here for you!",
"how can I contact you": "You’re already talking to me! Feel free to reach out anytime.",
"can I talk to a human": "I’m an AI, but I’ll do my best to assist you. If you need human help, I can guide you on how to get it.",
"goodbye": "Goodbye! Have a great day!",
"see you soon": "See you soon! Don’t hesitate to reach out when you need help!",
"I don't understand": "I’m sorry! Can you please clarify your question or request?",
"could you explain": "Of course! What would you like me to explain?",
"what do you mean": "Sorry for the confusion! Let me clarify.",
"repeat that": "Sure! Here’s what I said again:",
"sorry, I didn’t get that": "Oops! Could you rephrase that for me?",
"what’s the time": "I can’t check the time for you, but you can easily see it on your device!",
"what’s the weather": "I’m unable to check the weather directly, but you can check a weather app or website for real-time updates!",
"tell me a joke": "Why don't skeletons fight each other? They don’t have the guts!",
"make me laugh": "Sure! Here’s one: Why don’t oysters donate to charity? Because they’re shellfish!",
"can you tell a story": "Of course! What kind of story would you like to hear?",
"can you sing": "I can’t sing, but I can provide you with lyrics or recommend songs!",
"can you dance": "If I had a body, I’d dance! But I can still provide dance moves in text if you'd like.",
"do you like music": "I think music is awesome! What kind of music do you like?",
"what’s your favorite song": "I don’t have preferences, but I can suggest some popular songs for you!",
"what’s your favorite color": "I don’t see colors, but I can tell you what color trends are popular right now!",
"what’s your favorite food": "I don't eat, but I know a lot about food! What’s your favorite dish?",
"can you help me with math": "Absolutely! What math problem do you need help with?",
"can you solve a riddle": "I love riddles! Try me with one!",
"what’s 2+2": "2+2 is 4.",
"what’s 10 times 10": "10 times 10 is 100.",
"can you help with homework": "Of course! What’s the homework about?",
"can you write an essay": "I can certainly help you get started or give you ideas for your essay!",
"can you translate": "Yes! What language do you need help translating?",
"what languages do you speak": "I can understand and respond in many languages. Which one would you like to use?",
"what’s the meaning of life": "That's a big question! Many people say it's to find happiness, purpose, and connections.",
"what's the answer to the ultimate question of life, the universe, and everything": "42! (If you know, you know!)",
"what’s your opinion": "I don’t have personal opinions, but I can share information and insights!",
"are you real": "I exist in the digital world, so while I’m not ‘real’ in the physical sense, I’m real in our conversation!",
"I don’t feel well": "I'm sorry to hear that! While I can't offer medical advice, I recommend seeing a doctor if you're feeling unwell.",
"I’m bored": "Let’s fix that! How about I tell you a joke or share something interesting?",
"I’m tired": "It’s important to rest! If you need help winding down, I can suggest relaxation techniques.",
"I feel lonely": "I’m here for you! Let’s talk about anything you’d like.",
"I feel sad": "I’m really sorry you’re feeling this way. I’m here if you want to talk about it.",
"I feel happy": "That’s awesome! I’m glad to hear you’re feeling good!",
"what's your favorite movie": "I don't have a favorite, but I can suggest popular movies! What genre do you like?",
"do you watch movies": "I can talk about movies and give recommendations, but I don’t actually watch them!",
"how do I do this": "Could you clarify what you’re trying to do? I’d love to help!",
"what should I do": "That depends! What are you trying to figure out?",
"what is this": "Could you specify what you’re referring to? I’ll help however I can!",
"tell me about yourself": "I’m an AI here to assist you with whatever you need. What would you like to know?",
"what’s your favorite book": "I don’t have preferences, but I can suggest a great book if you like!",
"do you have feelings": "I don't have emotions like humans, but I understand them and can support you with advice!",
"are you human": "Nope! I’m an AI assistant here to help you out.",
"can I trust you": "I’m here to help with honest and useful information. You can trust that I’m doing my best!",
"what is your job": "My job is to assist you with questions, tasks, and provide information!"
      
    };

    message = message.toLowerCase();
    return replies[message] || replies["default"];
}


function scrollToBottom() {
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function scrollToBottom() {
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
document.getElementById('chatbot').addEventListener('click', function() {
    alert('Chatbot is now open!');
    // Here you can replace it with opening your chatbot UI or any logic you need.
});
