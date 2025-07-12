// Add this function to fetch user data from JSON
async function fetchUsers() {
    try {
        const response = await fetch('/data/users.json');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}

// Replace the existing login form handler
async function handleLoginSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const users = await fetchUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Create user data object to store
            const userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                userType: user.userType,
                stats: user.stats || {
                    resumeScore: 0,
                    applications: 0,
                    interviewRating: 0,
                    profileComplete: 0
                }
            };
            
            // Store user data in localStorage
            localStorage.setItem('authToken', `mock-token-${user.id}`);
            localStorage.setItem('user', JSON.stringify(userData));
            
            showMessage('loginFeedback', 'Login successful!', 'success');
            
            // Update UI and redirect after delay
            checkAuthStatus();
            setTimeout(() => {
                closeModal('loginModal');
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            showMessage('loginFeedback', 'Invalid email or password');
        }
    } catch (error) {
        showMessage('loginFeedback', 'Login error. Please try again.');
    }
}

// Update the register function to work with JSON
async function handleSignupSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const userType = document.querySelector('.user-type-btn.active')?.getAttribute('onclick').includes('recruiter') ? 'recruiter' : 'job-seeker';
    
    try {
        const users = await fetchUsers();
        
        // Check if email already exists
        if (users.some(u => u.email === email)) {
            showMessage('signupFeedback', 'Email already exists');
            return;
        }
        
        // Create new user (in a real app, this would be sent to backend)
        const newUser = {
            id: users.length + 1,
            username: name,
            email: email,
            password: password,
            userType: userType,
            createdAt: new Date().toISOString(),
            stats: {
                resumeScore: 0,
                applications: 0,
                interviewRating: 0,
                profileComplete: 0
            }
        };
        
        // Store user data in localStorage
        localStorage.setItem('authToken', `mock-token-${newUser.id}`);
        localStorage.setItem('user', JSON.stringify({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            userType: newUser.userType,
            stats: newUser.stats
        }));
        
        showMessage('signupFeedback', 'Registration successful!', 'success');
        
        // Update UI and redirect
        checkAuthStatus();
        setTimeout(() => {
            closeModal('signupModal');
            window.location.href = 'dashboard.html';
        }, 1500);
    } catch (error) {
        showMessage('signupFeedback', 'Registration error. Please try again.');
    }
}