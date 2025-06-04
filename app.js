// ====== SUPABASE CONFIGURATION ======
const supabaseUrl = 'https://pxmjhydcpiislenpjhbp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bWpoeWRjcGlpc2xlbnBqaGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjg4OTksImV4cCI6MjA2NDYwNDg5OX0.MIpHyAd8ikFcCuS6JC_RbNmb7qNbXyJrB7Gp2ReyeHw';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// ====== APPLICATION DATA ======
const appData = {
    students: {
        "CSE A": [
            "Daksh Sharma", "Tanmay Pravin Tate", "Deven Sharad Kshirsagar", "Aarush Pradeep Kote",
            "Lokhande Sejal Manoj", "Darshan Dhananjay Jagtap", "Rushil Jain", "Deshmukh Ayush Ashish",
            "Kadam Vaishnavi Shailendra", "Pawar Yuvraj Shailesh", "Bhorkar Jay Anand",
            "Hoshmit Rajesh Mahajan", "Vaidehee Susheel Belan", "Bhakti Dinesh Joshi",
            "Atharv Gajanan Chaware", "Kulkarni Avaneesh Yogesh", "Samihan Raj Sandbhor",
            "Riddhesh Yogesh Patil", "Londhe Rohan Rohit", "Sairam Sachin Pardeshi",
            "Om Sachin Pardeshi", "Aryan Madhukar Shinde", "Ishani Amol Badhe",
            "Bhamodkar Samruddhi Sandip", "Shaikh Saad Imran", "Shlok Chaitanya Shah",
            "Jog Arjun Kedar", "Purva Swanand Deshmukh", "Janavi Honrao", "Ranavare Ishan Nitin",
            "Abhiraj Pradeep Borade", "Goluguri Sulieman", "Ayush Chandrashekhar Pasalkar",
            "Aarushi Pankaj Jawale", "Deshpande Aarya Aniruddha", "Ishan Bhushan Dhaneshwar",
            "Jadhav Nikhil Raju", "Shaurya Rohit Shewale", "Telagamreddy Purnasai Saatvik",
            "Anish Chaitanya Rashinkar", "Aditya Singh Chauhan", "Aditya Jaydeep Shevate",
            "Lalit Vijay Patil", "Nimish Bhojraj Lanjewar", "Aditya Anil Patil",
            "Bhargav Athreya Munnaluri", "Pardeshi Samiksha Bipin", "Om Santosh Desai",
            "Aranya Nath Misra", "Armaan Kumar Rana", "Pilmenraj Glen Leslie",
            "Shwetank Prafulla Patil", "Nidhi Umakant Thakare", "Ashkan Altaf Tamboli",
            "Deep Dilip Salunkhe", "Krishnaraj Ravindra Shinde", "Aayush Abhijeet Patil",
            "Shivam Sachin Honrao", "Arnav Tushar Gandre", "Isha Satish Thube",
            "Attar Saniya Sameer", "Simran Ramdayal Ray", "Deokar Durva Dilip",
            "Vaidehi Prashant Mane", "Vedant Sachin Muthiyan", "Kelkar Amogh Amit",
            "Kulkarni Ashutosh Ashish", "Taniska Ashish Dhanlonhe", "Yognandan Narayan Bhere",
            "Avani Pravin Chandsare", "Giridhar Krishna Sunil", "Harshavardhan Kailas Sasar",
            "Samarth Shivaji Kokate", "Raj Deepak Chavan"
        ],
        "CSE B": [
            "Reeya Mandar Keskar", "Radha Prasad Kurhekar", "Deshmukh Aarya Dhananjay",
            "Aryan Swanand Kulkarni", "Khushal Sanjay Diwate", "Ayush Prashant Patil",
            "Apeksha Ishtaling Parashetti", "Amar Nath Dwivedi", "Vaishnav Maruti Kaspate",
            "Kulkarni Sanchita Suhas", "Pawar Rushikesh Pramod", "Aarti Dashrath Raut",
            "Gadiya Niraj Nandlal", "Reet Jeevan Shewale", "Oswal Vidhi Hasmukh",
            "Ananya Rohidas Gawari", "Samarth Sachin Ghenand", "Tanisha Jitesh Gandhi",
            "Giri Unmesh Prakash", "Omkar Surendra Purav", "Siddhant Yogesh Pasalkar",
            "Aniket Abhay Joshi", "Desai Vedang Dipesh", "Kshiteej Abhijeet Toradmal",
            "Priyal Gulab Patil", "Radhika Sanjay Sogam", "Yash Dnyaneshwar Narale",
            "Khushi Rupareliya", "Nair Vinit Biju", "Shifa Murad Khan", "Khushi Manoj Patil",
            "Ibrahim Abdul Jalil Kache", "Pathare Tanishk Santosh", "Tamobli Nakul Atul",
            "Patil Sarthak Vitthal", "Aryan Bajirao Suryawanshi", "Shaikh Zidan Ghudusab",
            "Vyas Tanmay Navaratan", "Takawale Siddhi Sunil Vaishali", "Jaid Vedant Satish",
            "Abhinav Raj", "Bhilare Vedant", "Date Vangmayee Tushar", "Harsh Harihar Kulkarni",
            "Mote Shravani Shantanu", "Ishan Rahul Jabade", "Anirudha Sachin Thite",
            "Ankit Amol Gaware", "Maithili Mahesh Pene", "Motwani Riya Jay",
            "Archit Anil Kadam", "Sparsh Sagar Doshi", "Palak Pankaj Gadhari",
            "Mohammad Rehan Mushahid Ansari", "Pawar Prithviraj Chandrakant",
            "Yadav Samruddhi Anish Padmashree", "Rasane Arnav Manoj", "Swasti Pravin Shinde",
            "Vedant Raju Ilag", "Ganjave Tanaya Prashant", "Mann Singhvi",
            "Durvank Pankaj Borole", "Vaishnavi Prakash Jadhav", "Pratham Nanagiri",
            "Abhilasha Manoj Gandhi", "Rajarshi Ishita Sandeep", "Tejas Sachin Shelar",
            "Saarth Vipin Borole", "Masul Aryan Hilal", "Kanojia Palak Prashant",
            "Pratik Bipinkumar Mishra", "Shinde Atharva Rohidas", "Aditya Prakash Kunjir",
            "Pranav Aravindrao Suryawanshi", "Kushagri Saxena"
        ],
        "AIDS": [
            "Vedant Prakash Parab", "Gujar Yash Nilesh", "Shriya Shirish Sabnis", "Gauri Revaji Auti",
            "Biswas Aaliya Sohail", "Sanika Kiran Deshmukh", "Kshitij Vijay Shinde", "Ansh Dnyaneshwar Thakare",
            "Rutav Ritesh Mehta", "Tejas Deepak Maskar", "Shaurya Ajay Panhale", "Shaikh Mehran Majid",
            "Yash Ganesh Gadiwan", "Sreejit Majumder", "Amrute Aaryan Jitendra", "Vivaan Varun Mathur",
            "Vedika Kapoor", "Soham Sachin Vidhate", "Shravani Kiran Ruikar", "Om Vinayak Honrao",
            "Darshan Vinayak Nayak", "Manish Narayan Shinde", "Patil Vedika Dilip", "Manthan Moondra",
            "Gargi Avinash Yekhande", "Ritvik Yogesh Kamble", "Isha Gajanan Kuchekar", "Prathamesh Nilesh Tupe",
            "Aditya Prashant Bodke", "Lavya Singh Chauhan", "Toshika Mukesh Bansal", "Patil Vaibhavi Satish",
            "Saanvi Jeetendra Dhakane", "Shreyash Shammi Ranjan", "Aadi Vishal Hanumante", "Soham Nigam",
            "Rishabh Shreyans Patani", "Pranshu Singh", "Sarvesh  Rakesh Alai", "Tanish Nstrnfts Bhavsar",
            "Aryan Niranjan More", "Daksh Paul", "Isha Pashant Kale", "Harsh Sunil Gidwani",
            "Pushkar  Rakesh Patil", "Aishi Anurag Srivastava", "Anushka Nitin Ugale", "Vansh Parashar",
            "Gayatri Pravin Swami", "Samarth Mahesh Bolkotgi", "Nakshatra Kakani", "Jain Suneri Amit",
            "Shelke Yash Kishor", "Vrunda Kirtibhai Borisagar", "Zoya Yunus Sayyad", "Anaya Sharma",
            "Nema Essha", "Gaiki Lokesh Abhijit", "Ojas Rajshekhar Lature", "Ghodke Aahan Sachin",
            "Sujay Heramb Rasal", "Ajinkya Dattu Sonawane", "Manmohan Shrinivas Parge", "Shivtej Dipak Gaikwad",
            "Wagh Yashraj Nitin", "Anushka Manoj Wani", "Vidhi Rohan Rathod", "Aryan Amar Jadhav",
            "Raj Umesh Shinde", "Tanishka Rajendra Parkale", "Sakshi Kiran Talegaonkar",
            "Shashwath Chandrashekhar Shinde", "Hardik Dhanraj Chaudhary", "Drishti Rahul Rathod",
            "Nicket Shah", "Reet Kaur Bhasin", "Parth Prashant Tupe", "Vallabh Shahaji Pawar",
            "Aashka Akash Porwal", "Samuel Shadrak Chol"
        ]
    },
    mentors: [
        "Jyoti Khurpude (Mante)", "Sanjivani Kulkarni", "Mrunal Fatangare", "Hemlata Ohal",
        "Farahhdeeba Shaikh", "Prerana Patil", "Yogesh Patil", "Vilas Rathod",
        "Pradeep Paygude", "Kajal Chavan", "Megha Dhotey", "Pallavi Nehete",
        "Nita Dongre", "Mrunal Aware", "Shilpa Shitole", "Vaishali Langote",
        "Sulkshana Malwade"
    ],
    adminCredentials: {
        username: "ansh",
        password: "anshthakare13"
    }
};

// ====== APPLICATION STATE ======
let currentTeam = {};
let isLoggedIn = false;
let selectedMentorTeams = {};

// ====== SUPABASE DATA FUNCTIONS ======
async function getTeams() {
    try {
        const { data, error } = await supabaseClient
            .from('teams')
            .select('*')
            .order('registration_date', { ascending: false });
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching teams:', error);
        return [];
    }
}

async function saveTeam(team) {
    try {
        const { data, error } = await supabaseClient
            .from('teams')
            .insert([team]);
        
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error saving team:', error);
        alert('Error saving team: ' + error.message);
        return false;
    }
}

async function deleteTeam(teamId) {
    if (confirm('Are you sure you want to delete this team? This action cannot be undone.')) {
        try {
            const { error } = await supabaseClient
                .from('teams')
                .delete()
                .eq('team_id', teamId);
            
            if (error) throw error;
            
            await displayTeamsManagement();
            await displayTeams();
            await displayRemainingStudents();
            alert('Team deleted successfully!');
        } catch (error) {
            console.error('Error deleting team:', error);
            alert('Error deleting team: ' + error.message);
        }
    }
}

async function getRegisteredStudents() {
    const teams = await getTeams();
    const registered = new Set();
    teams.forEach(team => {
        registered.add(team.leader);
        if (team.members) {
            team.members.forEach(member => registered.add(member));
        }
    });
    return registered;
}

// ====== UTILITY FUNCTIONS ======
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Handle specific page initialization
    if (pageId === 'view-teams') {
        setTimeout(() => {
            displayTeams();
            displayRemainingStudents();
        }, 100);
    } else if (pageId === 'team-management') {
        setTimeout(() => {
            displayTeamsManagement();
        }, 100);
    } else if (pageId === 'mentor-panel') {
        setTimeout(() => {
            populateAdminMentorDropdown();
        }, 100);
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
}

function getStudentById(id) {
    if (!id) return null;
    const [dept, index] = id.split('_');
    if (appData.students[dept] && appData.students[dept][index]) {
        return {
            id: id,
            name: appData.students[dept][index],
            department: dept
        };
    }
    return null;
}

// ====== POPULATE DROPDOWN FUNCTIONS ======
async function populateTeamLeaderDropdown() {
    const registered = await getRegisteredStudents();
    const dropdown = document.getElementById('team-leader');
    if (!dropdown) return;
    
    dropdown.innerHTML = '<option value="">Select Team Leader</option>';
    
    Object.entries(appData.students).forEach(([dept, students]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = dept;
        students.forEach((name, index) => {
            const studentId = `${dept}_${index}`;
            if (!registered.has(studentId)) {
                const option = document.createElement('option');
                option.value = studentId;
                option.textContent = name;
                optgroup.appendChild(option);
            }
        });
        if (optgroup.children.length > 0) {
            dropdown.appendChild(optgroup);
        }
    });
}

function populateDepartmentDropdowns() {
    const departmentDropdowns = ['member-2-dept', 'member-3-dept', 'member-4-dept'];
    const departments = Object.keys(appData.students);
    
    departmentDropdowns.forEach(dropdownId => {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;
        
        dropdown.innerHTML = '<option value="">Select Department</option>';
        
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = dept;
            dropdown.appendChild(option);
        });
    });
}

async function populateStudentByDepartment(department, targetDropdownId) {
    const registered = await getRegisteredStudents();
    const dropdown = document.getElementById(targetDropdownId);
    if (!dropdown) return;
    
    dropdown.innerHTML = '<option value="">Select Student</option>';
    
    if (department && appData.students[department]) {
        appData.students[department].forEach((name, index) => {
            const studentId = `${department}_${index}`;
            if (!registered.has(studentId)) {
                const option = document.createElement('option');
                option.value = studentId;
                option.textContent = name;
                dropdown.appendChild(option);
            }
        });
    }
    
    dropdown.disabled = !department;
}

function populateMentorDropdowns() {
    const mentorDropdowns = ['mentor-1', 'mentor-2', 'mentor-3', 'mentor-4'];
    
    mentorDropdowns.forEach(dropdownId => {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;
        
        dropdown.innerHTML = '<option value="">Select Mentor</option>';
        
        appData.mentors.forEach((mentor, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = mentor;
            dropdown.appendChild(option);
        });
    });
}

function populateAdminMentorDropdown() {
    const dropdown = document.getElementById('mentor-selector');
    if (!dropdown) return;
    
    dropdown.innerHTML = '<option value="">Choose your mentor profile</option>';
    
    appData.mentors.forEach((mentor, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = mentor;
        dropdown.appendChild(option);
    });
}

// ====== VALIDATION FUNCTIONS ======
async function validateStudentSelections() {
    const selectedStudents = [];
    const dropdowns = ['team-leader', 'member-2', 'member-3', 'member-4'];
    
    dropdowns.forEach(dropdownId => {
        const element = document.getElementById(dropdownId);
        if (element && element.value) {
            selectedStudents.push(element.value);
        }
    });
    
    const hasDuplicates = selectedStudents.length !== new Set(selectedStudents).size;
    
    if (hasDuplicates) {
        showError('team-error', 'Each student can only be selected once. Please choose different students.');
        return false;
    }
    
    // Check if any selected students are already registered
    const registeredStudents = await getRegisteredStudents();
    const alreadyRegistered = selectedStudents.filter(studentId => registeredStudents.has(studentId));
    
    if (alreadyRegistered.length > 0) {
        const studentNames = alreadyRegistered.map(id => getStudentById(id)?.name).join(', ');
        showError('team-error', `The following students are already registered in other teams: ${studentNames}`);
        return false;
    }
    
    return true;
}

function validateMentorSelections() {
    const selectedMentors = [];
    const dropdowns = ['mentor-1', 'mentor-2', 'mentor-3', 'mentor-4'];
    
    dropdowns.forEach(dropdownId => {
        const element = document.getElementById(dropdownId);
        if (element && element.value) {
            selectedMentors.push(element.value);
        }
    });
    
    const hasDuplicates = selectedMentors.length !== new Set(selectedMentors).size;
    
    if (hasDuplicates) {
        showError('mentor-error', 'Each mentor can only be selected once. Please choose different mentors.');
        return false;
    }
    
    return true;
}

// ====== FORM HANDLERS ======
async function handleTeamDetailsForm(event) {
    event.preventDefault();
    hideError('team-error');
    
    if (!(await validateStudentSelections())) return false;
    
    const teamName = document.getElementById('team-name').value.trim();
    const teamLeader = document.getElementById('team-leader').value;
    const member2 = document.getElementById('member-2').value;
    const member3 = document.getElementById('member-3').value;
    const member4 = document.getElementById('member-4').value;
    
    if (!teamName || !teamLeader || !member2 || !member3) {
        showError('team-error', 'Please fill in all required fields.');
        return false;
    }
    
    // Check for duplicate team name
    const existingTeams = await getTeams();
    if (existingTeams.some(team => team.name.toLowerCase() === teamName.toLowerCase())) {
        showError('team-error', 'Team name already exists. Please choose a different name.');
        return false;
    }
    
    const members = [teamLeader, member2, member3];
    if (member4) members.push(member4);
    
    currentTeam = {
        team_id: `team-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: teamName,
        leader: teamLeader,
        members: members
    };
    
    showPage('mentor-selection');
    return false;
}

async function handleMentorSelectionForm(event) {
    event.preventDefault();
    hideError('mentor-error');
    
    if (!validateMentorSelections()) return false;
    
    const mentor1 = document.getElementById('mentor-1').value;
    const mentor2 = document.getElementById('mentor-2').value;
    const mentor3 = document.getElementById('mentor-3').value;
    const mentor4 = document.getElementById('mentor-4').value;
    
    if (!mentor1 || !mentor2 || !mentor3 || !mentor4) {
        showError('mentor-error', 'Please select all mentor preferences.');
        return false;
    }
    
    currentTeam.mentor_preferences = [
        parseInt(mentor1), parseInt(mentor2), 
        parseInt(mentor3), parseInt(mentor4)
    ];
    
    showPage('project-ideas');
    return false;
}

async function handleProjectIdeasForm(event) {
    event.preventDefault();
    hideError('ideas-error');
    
    const idea1 = document.getElementById('idea-1').value.trim();
    const idea2 = document.getElementById('idea-2').value.trim();
    const idea3 = document.getElementById('idea-3').value.trim();
    
    if (!idea1 || !idea2 || !idea3) {
        showError('ideas-error', 'Please fill in all project ideas.');
        return false;
    }
    
    if (idea1.length < 10 || idea2.length < 10 || idea3.length < 10) {
        showError('ideas-error', 'Each project idea must be at least 10 characters long.');
        return false;
    }
    
    currentTeam.project_ideas = [idea1, idea2, idea3];
    currentTeam.registration_date = new Date().toISOString();
    
    const success = await saveTeam(currentTeam);
    
    if (success) {
        // Reset forms
        document.getElementById('team-details-form').reset();
        document.getElementById('mentor-selection-form').reset();
        document.getElementById('project-ideas-form').reset();
        
        // Reset member dropdowns
        ['member-2', 'member-3', 'member-4'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.disabled = true;
                element.innerHTML = '<option value="">Select Student</option>';
            }
        });
        
        currentTeam = {};
        showPage('success-page');
    } else {
        showError('ideas-error', 'Failed to save team. Please try again.');
    }
    
    return false;
}

function handleAdminLogin(event) {
    event.preventDefault();
    hideError('login-error');
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (username === appData.adminCredentials.username && password === appData.adminCredentials.password) {
        isLoggedIn = true;
        document.getElementById('admin-login-form').reset();
        showPage('admin-dashboard');
    } else {
        showError('login-error', 'Invalid username or password');
    }
    
    return false;
}

function logout() {
    isLoggedIn = false;
    showPage('welcome-page');
}

// ====== DISPLAY FUNCTIONS ======
async function displayTeams() {
    const teams = await getTeams();
    const teamsContainer = document.getElementById('teams-list');
    if (!teamsContainer) return;
    
    if (teams.length === 0) {
        teamsContainer.innerHTML = '<div class="empty-state"><p>No teams registered yet.</p></div>';
        return;
    }
    
    teamsContainer.innerHTML = teams.map(team => `
        <div class="team-card">
            <h4>${team.name}</h4>
            <div class="team-info">
                <div class="team-detail">
                    <h5>Team Leader</h5>
                    <p>${getStudentById(team.leader)?.name} (${getStudentById(team.leader)?.department})</p>
                </div>
                <div class="team-detail">
                    <h5>All Members</h5>
                    <ul>
                        ${team.members.map(memberId => {
                            const student = getStudentById(memberId);
                            return `<li>${student?.name} (${student?.department})</li>`;
                        }).join('')}
                    </ul>
                </div>
                <div class="team-detail">
                    <h5>Department Distribution</h5>
                    <p>${getDepartmentDistribution(team.members)}</p>
                </div>
                <div class="team-detail">
                    <h5>Mentor Preferences</h5>
                    <ul>
                        ${team.mentor_preferences.map((mentorIndex, index) => 
                            `<li>${index + 1}. ${appData.mentors[mentorIndex]}</li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="team-detail">
                    <h5>Project Ideas</h5>
                    <ul>
                        ${team.project_ideas.map((idea, index) => 
                            `<li><strong>Idea ${index + 1}:</strong> ${idea}</li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
            <p class="registration-date"><small>Registered on: ${new Date(team.registration_date).toLocaleDateString()}</small></p>
        </div>
    `).join('');
}

async function displayTeamsManagement() {
    const teams = await getTeams();
    const container = document.getElementById('teams-management-list');
    if (!container) return;
    
    if (teams.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No teams registered yet.</p></div>';
        return;
    }
    
    container.innerHTML = teams.map(team => `
        <div class="team-management-card">
            <div class="team-header">
                <h4>${team.name}</h4>
                <button onclick="deleteTeam('${team.team_id}')" class="btn btn--danger btn--sm">
                    Delete Team
                </button>
            </div>
            <div class="team-summary">
                <p><strong>Leader:</strong> ${getStudentById(team.leader)?.name}</p>
                <p><strong>Members:</strong> ${team.members.length}</p>
                <p><strong>Registered:</strong> ${new Date(team.registration_date).toLocaleDateString()}</p>
            </div>
        </div>
    `).join('');
}

function getDepartmentDistribution(memberIds) {
    const deptCounts = {};
    memberIds.forEach(id => {
        const student = getStudentById(id);
        if (student) {
            deptCounts[student.department] = (deptCounts[student.department] || 0) + 1;
        }
    });
    
    return Object.entries(deptCounts)
        .map(([dept, count]) => `${dept}: ${count}`)
        .join(', ');
}

async function displayRemainingStudents() {
    const teams = await getTeams();
    const registeredStudentIds = new Set();
    
    teams.forEach(team => {
        team.members.forEach(memberId => registeredStudentIds.add(memberId));
    });
    
    const container = document.getElementById('remaining-students-display');
    if (!container) return;
    
    let html = '<h3>Students Not Yet in Teams</h3>';
    
    Object.keys(appData.students).forEach(department => {
        const remainingStudents = appData.students[department]
            .map((name, index) => ({ id: `${department}_${index}`, name }))
            .filter(student => !registeredStudentIds.has(student.id));
        
        html += `
            <div class="department-section">
                <h4>${department} (${remainingStudents.length} remaining out of ${appData.students[department].length})</h4>
                <div class="students-grid">
                    ${remainingStudents.length === 0 ? 
                        '<div class="no-students">All students assigned to teams</div>' :
                        remainingStudents.map(student => `<div class="student-card">${student.name}</div>`).join('')
                    }
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ====== MENTOR PANEL FUNCTIONS ======
async function handleMentorSelection() {
    const mentorIndex = document.getElementById('mentor-selector').value;
    const mentorDisplay = document.getElementById('mentor-teams-display');
    
    if (!mentorIndex) {
        mentorDisplay.classList.add('hidden');
        return;
    }
    
    const mentorName = appData.mentors[mentorIndex];
    document.getElementById('mentor-name-display').textContent = mentorName;
    
    await displayMentorPreferences(parseInt(mentorIndex));
    mentorDisplay.classList.remove('hidden');
}

async function displayMentorPreferences(mentorIndex) {
    const teams = await getTeams();
    const preferencesContainer = document.getElementById('preference-stats');
    const selectionContainer = document.getElementById('team-selection');
    
    // Group teams by preference level for this mentor
    const preferences = {
        first: [],
        second: [],
        third: [],
        fourth: []
    };
    
    teams.forEach(team => {
        if (team.mentor_preferences) {
            const mentorPos = team.mentor_preferences.indexOf(mentorIndex);
            if (mentorPos === 0) preferences.first.push(team);
            else if (mentorPos === 1) preferences.second.push(team);
            else if (mentorPos === 2) preferences.third.push(team);
            else if (mentorPos === 3) preferences.fourth.push(team);
        }
    });
    
    // Display preference statistics
    preferencesContainer.innerHTML = `
        <div class="preference-grid">
            <div class="preference-card first-choice">
                <h4>1st Choice (${preferences.first.length} teams)</h4>
                ${preferences.first.map(team => `
                    <div class="team-preference-item">
                        <strong>${team.name}</strong>
                        <p>Leader: ${getStudentById(team.leader)?.name}</p>
                        <p>Members: ${team.members.length}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="preference-card second-choice">
                <h4>2nd Choice (${preferences.second.length} teams)</h4>
                ${preferences.second.map(team => `
                    <div class="team-preference-item">
                        <strong>${team.name}</strong>
                        <p>Leader: ${getStudentById(team.leader)?.name}</p>
                        <p>Members: ${team.members.length}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="preference-card third-choice">
                <h4>3rd Choice (${preferences.third.length} teams)</h4>
                ${preferences.third.map(team => `
                    <div class="team-preference-item">
                        <strong>${team.name}</strong>
                        <p>Leader: ${getStudentById(team.leader)?.name}</p>
                        <p>Members: ${team.members.length}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="preference-card fourth-choice">
                <h4>4th Choice (${preferences.fourth.length} teams)</h4>
                ${preferences.fourth.map(team => `
                    <div class="team-preference-item">
                        <strong>${team.name}</strong>
                        <p>Leader: ${getStudentById(team.leader)?.name}</p>
                        <p>Members: ${team.members.length}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Display team selection interface
    const allTeamsForMentor = [...preferences.first, ...preferences.second, ...preferences.third, ...preferences.fourth];
    const selectedTeams = selectedMentorTeams[mentorIndex] || [];
    
    selectionContainer.innerHTML = `
        <div class="team-selection-section">
            <h4>Select Your Teams (Maximum 4)</h4>
            <p class="selection-info">Selected: ${selectedTeams.length}/4 teams</p>
            
            <div class="teams-selection-grid">
                ${allTeamsForMentor.map(team => {
                    const isSelected = selectedTeams.includes(team.team_id);
                    const preferenceLevel = team.mentor_preferences.indexOf(mentorIndex) + 1;
                    
                    return `
                        <div class="team-selection-card ${isSelected ? 'selected' : ''}">
                            <div class="team-selection-header">
                                <h5>${team.name}</h5>
                                <span class="preference-badge preference-${preferenceLevel}">
                                    ${preferenceLevel}${getOrdinalSuffix(preferenceLevel)} Choice
                                </span>
                            </div>
                            <div class="team-selection-details">
                                <p><strong>Leader:</strong> ${getStudentById(team.leader)?.name}</p>
                                <p><strong>Members:</strong> ${team.members.length}</p>
                                <p><strong>Departments:</strong> ${getDepartmentDistribution(team.members)}</p>
                            </div>
                            <div class="team-selection-actions">
                                ${isSelected ? 
                                    `<button class="btn btn--danger btn--sm" onclick="deselectTeam(${mentorIndex}, '${team.team_id}')">
                                        Remove Team
                                    </button>` :
                                    `<button class="btn btn--primary btn--sm" onclick="selectTeam(${mentorIndex}, '${team.team_id}')" 
                                        ${selectedTeams.length >= 4 ? 'disabled' : ''}>
                                        Select Team
                                    </button>`
                                }
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function selectTeam(mentorIndex, teamId) {
    if (!selectedMentorTeams[mentorIndex]) {
        selectedMentorTeams[mentorIndex] = [];
    }
    
    if (selectedMentorTeams[mentorIndex].length >= 4) {
        alert('You can only select maximum 4 teams.');
        return;
    }
    
    if (!selectedMentorTeams[mentorIndex].includes(teamId)) {
        selectedMentorTeams[mentorIndex].push(teamId);
        displayMentorPreferences(mentorIndex);
        
        // Save to localStorage for persistence
        localStorage.setItem('mentorSelections', JSON.stringify(selectedMentorTeams));
        
        alert('Team selected successfully!');
    }
}

function deselectTeam(mentorIndex, teamId) {
    if (selectedMentorTeams[mentorIndex]) {
        selectedMentorTeams[mentorIndex] = selectedMentorTeams[mentorIndex].filter(id => id !== teamId);
        displayMentorPreferences(mentorIndex);
        
        // Save to localStorage for persistence
        localStorage.setItem('mentorSelections', JSON.stringify(selectedMentorTeams));
        
        alert('Team removed successfully!');
    }
}

function getOrdinalSuffix(num) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}

async function exportMentorSelectionsToCSV() {
    const teams = await getTeams();
    
    if (Object.keys(selectedMentorTeams).length === 0) {
        alert('No mentor selections to export.');
        return;
    }
    
    const headers = ['Mentor Name', 'Team Name', 'Team Leader', 'Team Members', 'Selection Status'];
    
    const csvContent = [
        headers.join(','),
        ...Object.entries(selectedMentorTeams).flatMap(([mentorIndex, teamIds]) => {
            const mentorName = appData.mentors[mentorIndex];
            return teamIds.map(teamId => {
                const team = teams.find(t => t.team_id === teamId);
                if (!team) return '';
                
                const leader = getStudentById(team.leader);
                const members = team.members.map(id => getStudentById(id)?.name).join('; ');
                
                return [
                    `"${mentorName}"`,
                    `"${team.name}"`,
                    `"${leader?.name}"`,
                    `"${members}"`,
                    `"Selected"`
                ].join(',');
            });
        }).filter(row => row)
    ].join('\n');
    
    downloadCSV(csvContent, 'mentor_selections.csv');
}

// ====== EXPORT FUNCTIONS ======
async function exportTeamsToCSV() {
    const teams = await getTeams();
    
    if (teams.length === 0) {
        alert('No teams to export.');
        return;
    }
    
    const headers = ['Team Name', 'Leader', 'Leader Department', 'All Members', 'Department Distribution', 
                    'Mentor 1st Choice', 'Mentor 2nd Choice', 'Mentor 3rd Choice', 'Mentor 4th Choice',
                    'Project Idea 1', 'Project Idea 2', 'Project Idea 3', 'Registration Date'];
    
    const csvContent = [
        headers.join(','),
        ...teams.map(team => {
            const leader = getStudentById(team.leader);
            const allMembers = team.members.map(id => getStudentById(id)?.name).join('; ');
            const deptDist = getDepartmentDistribution(team.members);
            const mentors = team.mentor_preferences.map(index => appData.mentors[index]);
            
            return [
                `"${team.name}"`,
                `"${leader?.name}"`,
                `"${leader?.department}"`,
                `"${allMembers}"`,
                `"${deptDist}"`,
                ...mentors.map(m => `"${m}"`),
                ...team.project_ideas.map(idea => `"${idea}"`),
                `"${new Date(team.registration_date).toLocaleDateString()}"`
            ].join(',');
        })
    ].join('\n');
    
    downloadCSV(csvContent, 'capstone_teams.csv');
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ====== CHARACTER COUNTER SETUP ======
function setupCharacterCounters() {
    const textareas = ['idea-1', 'idea-2', 'idea-3'];
    textareas.forEach(id => {
        const textarea = document.getElementById(id);
        const counter = document.getElementById(`${id}-counter`);
        
        if (textarea && counter) {
            textarea.addEventListener('input', function() {
                const length = this.value.length;
                const maxLength = 500;
                counter.textContent = `${length}/${maxLength} characters`;
                
                if (length > maxLength * 0.9) {
                    counter.classList.add('warning');
                } else {
                    counter.classList.remove('warning');
                }
                
                if (length > maxLength) {
                    counter.classList.add('error');
                } else {
                    counter.classList.remove('error');
                }
            });
        }
    });
}

// ====== INITIALIZATION ======
function initializeApp() {
    populateTeamLeaderDropdown();
    populateDepartmentDropdowns();
    populateMentorDropdowns();
    setupCharacterCounters();
    
    // Form event listeners
    const teamForm = document.getElementById('team-details-form');
    if (teamForm) {
        teamForm.addEventListener('submit', handleTeamDetailsForm);
    }
    
    const mentorForm = document.getElementById('mentor-selection-form');
    if (mentorForm) {
        mentorForm.addEventListener('submit', handleMentorSelectionForm);
    }
    
    const ideasForm = document.getElementById('project-ideas-form');
    if (ideasForm) {
        ideasForm.addEventListener('submit', handleProjectIdeasForm);
    }
    
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleAdminLogin);
    }
    
    // Department change listeners
    for (let i = 2; i <= 4; i++) {
        const deptDropdown = document.getElementById(`member-${i}-dept`);
        if (deptDropdown) {
            deptDropdown.addEventListener('change', function() {
                populateStudentByDepartment(this.value, `member-${i}`);
            });
        }
    }
    
    // Mentor selector event listener
    const mentorSelector = document.getElementById('mentor-selector');
    if (mentorSelector) {
        mentorSelector.addEventListener('change', handleMentorSelection);
    }
    
    // Load saved mentor selections
    const savedSelections = localStorage.getItem('mentorSelections');
    if (savedSelections) {
        selectedMentorTeams = JSON.parse(savedSelections);
    }
}

// ====== START APPLICATION ======
document.addEventListener('DOMContentLoaded', initializeApp);

// Make functions globally available for onclick handlers
window.showPage = showPage;
window.handleTeamDetailsForm = handleTeamDetailsForm;
window.handleMentorSelectionForm = handleMentorSelectionForm;
window.handleProjectIdeasForm = handleProjectIdeasForm;
window.handleAdminLogin = handleAdminLogin;
window.logout = logout;
window.deleteTeam = deleteTeam;
window.exportTeamsToCSV = exportTeamsToCSV;
window.handleMentorSelection = handleMentorSelection;
window.selectTeam = selectTeam;
window.deselectTeam = deselectTeam;
window.exportMentorSelectionsToCSV = exportMentorSelectionsToCSV;
