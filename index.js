// Form aur output elements ko DOM se get karo
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Resume generate karne ka function
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Default form submission ko roko
        // Form se values lo
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Check karo ke sab fields bhari hui hain
        if (!name || !email || !phone || !education || !experience || !skills || !description) {
            alert('Please fill in all fields');
            return; // Agar koi field empty hai to function ko rok do
        }
        // Resume ke liye HTML generate karo
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        // Generated resume ko output div mein dikhayein
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form ya Output div DOM mein nahi milay');
}
