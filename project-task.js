/*
===========================================
📚 Inheritance Practice: Library System
===========================================

🎯 Objective:
Practice applying inheritance by creating a class hierarchy
for a library management system.

Students will:
- Define a base class
- Extend it to create child classes
- Share and specialize behaviors through inheritance

---
📘 Scenario:
You're designing a library system that lends items like:

📖 Books → author, genre  
📀 DVDs → director, duration  
📰 Magazines → issueNumber, publisher  

All items share:
- title
- id
- isAvailable
- checkOut() and returnItem() methods

---
🧭 Instructions:
1️⃣ Create a base class `LibraryItem`  
2️⃣ Extend it with `Book`, `DVD`, and `Magazine`  
3️⃣ Instantiate and test objects  
4️⃣ Verify inherited and unique behaviors
*/


// ============================================
// 🧱 Step 1: Define the LibraryItem base class
// ============================================
// - Properties: title, id, isAvailable (default to true)
// - Methods: checkOut() → sets isAvailable to false
//            returnItem() → sets isAvailable to true



// ============================================
// 📚 Step 2: Create child classes for Book, DVD, Magazine
// ============================================
// - Book: Add author and genre properties
// - DVD: Add director and duration properties
// - Magazine: Add issueNumber and publisher properties



// ============================================
// 🧪 Step 3: Instantiate objects and test methods
// ============================================
// - Create one instance of each child class
// - Log each instance to check its properties
// - Call checkOut() and returnItem() on different instances



// ============================================
// ✅ Step 4: Test inheritance and unique properties
// ============================================
// - Use console.log() to display unique properties (e.g., author, director, issueNumber)
// - Confirm shared methods (checkOut and returnItem) work across all classes
