# Simple Guide to Understanding the Code

## How a Website Works (Super Simple Version)

Think of a website like a restaurant:

1. **Frontend** = What you see (the menu, the table, the plate)
2. **Backend** = What happens behind the scenes (the kitchen, the chef cooking)
3. **Database** = Where information is stored (the recipe book, inventory)

When you order food:
1. You tell the waiter (Frontend)
2. The waiter tells the chef (Backend)
3. The chef looks up recipes (Database)
4. The chef makes the food
5. The waiter brings it to you

---

## Our Project Folders

### `frontend/` - What People See
This is the website and mobile app that users interact with.

**What's in it:**
- `src/` - The code for the website
- `src/App.js` - Main page of the app
- `src/components/` - Pieces of the website (buttons, forms, etc.)
- `public/` - Images and files

### `backend/` - The Brain of the App
This does the math and thinking (calculating birth charts, finding locations, etc.)

**What's in it:**
- `app.py` - Main Python file that runs the server
- `routes/` - Different features (birth chart, locations, etc.)

---

## Important Code Concepts

### Variables (Containers for Information)
Think of variables like boxes that hold information.

```javascript
// JavaScript example (Frontend)
const userName = "Alex";  // This box holds a name
const age = 25;           // This box holds a number
```

```python
# Python example (Backend)
user_name = "Alex"        # This box holds a name
age = 25                  # This box holds a number
```

### Functions (Actions/Commands)
Functions are like recipes - they do a specific job.

```javascript
// Get the user's birth information
function getUserBirthInfo() {
  // Do something here
  return birthInfo;
}
```

### If/Else (Making Decisions)
The code makes decisions based on information.

```javascript
if (easyModeEnabled) {
  // Show simple version
  showSimpleText();
} else {
  // Show detailed version
  showDetailedText();
}
```

---

## How Accessibility Works

### Text-to-Speech
We use a tool that reads text aloud:

```javascript
function speakText(text) {
  // Create a voice that speaks
  const speech = new SpeechSynthesisUtterance(text);
  
  // Make it speak
  window.speechSynthesis.speak(speech);
}
```

### Easy Mode
We can hide complicated parts:

```javascript
if (easyMode === true) {
  // Show fewer options
  hideAdvancedFeatures();
} else {
  // Show everything
  showAllFeatures();
}
```

---

## Connecting Frontend to Backend

When the user fills out their birth info:

1. **Frontend** collects the information
2. **Frontend** sends it to **Backend**
3. **Backend** calculates the birth chart
4. **Backend** sends results back
5. **Frontend** shows the results

This is called an "API call" - it's like sending a message.

```javascript
// Frontend code
const response = await fetch('http://localhost:5000/api/birth-chart', {
  method: 'POST',
  body: JSON.stringify(birthData)
});

const result = await response.json();
// Now we have the birth chart!
```

```python
# Backend code
@app.route('/api/birth-chart', methods=['POST'])
def calculate_birth_chart():
    # Get the data from frontend
    data = request.json
    
    # Calculate the birth chart
    chart = calculate_chart(data)
    
    # Send back to frontend
    return jsonify(chart)
```

---

## Building Step by Step

### Phase 1: Basic Setup ✅
- [ ] User can enter their birth info
- [ ] Display the information back

### Phase 2: Birth Chart
- [ ] Calculate birth chart
- [ ] Show birth chart visually

### Phase 3: Readings
- [ ] Show daily horoscope
- [ ] Show location recommendations

### Phase 4: Family
- [ ] Add family members
- [ ] Show family compatibility

### Phase 5: Polish
- [ ] Make it pretty
- [ ] Add text-to-speech everywhere
- [ ] Add easy mode
- [ ] Test on mobile

---

## Tips for Learning

1. **Don't memorize** - Learn to find answers
2. **Read comments** - They explain everything
3. **Break problems into small pieces** - Don't solve it all at once
4. **Test as you go** - Make sure things work before moving forward
5. **Google is your friend** - Programmers Google things all day!

---

## What Each File Does

| File | Does What |
|------|----------|
| `package.json` | Tells the project what tools it needs (Frontend) |
| `requirements.txt` | Tells the project what tools it needs (Backend) |
| `app.py` | The main server file that listens for requests |
| `App.js` | The main website file that people see |
| `.gitignore` | Files Git should ignore |

---

Next: Check `GETTING_STARTED.md` to install everything!