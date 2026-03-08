function calculateDueDate() {
    // Get input values
    const matingDate = new Date(document.getElementById('mating-date').value);
    const knownOvulation = document.getElementById('known-ovulation').value;
    const breedSize = document.getElementById('breed-size').value;
    
    // Validate input
    if (!matingDate.getTime()) {
        alert("Please enter a valid mating date");
        return;
    }
    
    // Calculate based on best available data
    let ovulationDate;
    let gestationLength;
    
    if (knownOvulation) {
        // If ovulation date is known, use that as day 0 (most accurate)
        ovulationDate = new Date(knownOvulation);
        // Breed size adjustments (days)
        const sizeAdjustments = {
            'small': 62,
            'medium': 63,
            'large': 64,
            'giant': 65
        };
        gestationLength = sizeAdjustments[breedSize];
    } else {
        // If ovulation date unknown, estimate from mating
        ovulationDate = new Date(matingDate);
        // Add 2 days as ovulation typically occurs 2 days after LH surge
        // (which usually coincides with first mating)
        ovulationDate.setDate(ovulationDate.getDate() + 2);
        
        // Standard gestation is 63 days from ovulation
        // Add slight breed variation
        const sizeAdjustments = {
            'small': 62,
            'medium': 63,
            'large': 64,
            'giant': 65
        };
        gestationLength = sizeAdjustments[breedSize];
    }
    
    // Calculate due dates (range of 61-65 days from ovulation)
    const dueDate = new Date(ovulationDate);
    dueDate.setDate(dueDate.getDate() + gestationLength);
    
    const earlyDueDate = new Date(ovulationDate);
    earlyDueDate.setDate(earlyDueDate.getDate() + 61);
    
    const lateDueDate = new Date(ovulationDate);
    lateDueDate.setDate(lateDueDate.getDate() + 65);
    
    // Calculate current progress
    const today = new Date();
    const currentDay = Math.floor((today - ovulationDate) / (1000 * 60 * 60 * 24));
    const daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
    
    // Display results
    document.getElementById('due-date-range').textContent =
        `${earlyDueDate.toDateString()} to ${lateDueDate.toDateString()}`;
    document.getElementById('due-date').textContent = dueDate.toDateString();
    document.getElementById('current-day').textContent = currentDay > 0 ? currentDay :
        (currentDay === 0 ? "Ovulation day" : "Pre-ovulation");
    document.getElementById('days-remaining').textContent = daysRemaining > 0 ?
        `${daysRemaining} days` : (daysRemaining === 0 ? "Due today!" : `${Math.abs(daysRemaining)} days past due`);
    
    // Generate timeline
    generateTimeline(ovulationDate, dueDate, breedSize);
    
    // Show results
    document.getElementById('results').style.display = 'block';

    // Content loop
    if (typeof showNextSteps === 'function') showNextSteps('dog-pregnancy', collectUserData());
}

function generateTimeline(ovulationDate, dueDate, breedSize) {
    const timelineSections = document.getElementById('timeline-sections');
    timelineSections.innerHTML = '';
    
    // Group milestones by pregnancy stage
    const stages = [
        {
            title: "Early Pregnancy (Days 0-20)",
            milestones: [
                {day: 0, title: "Ovulation", desc: "Eggs released (viable for 2-5 days). Progesterone >5 ng/mL."},
                {day: 2, title: "Fertilization", desc: "Occurs in oviduct. Sperm can survive 5-11 days post-mating."},
                {day: 5, title: "Embryo Formation", desc: "Early cell division begins as embryos move toward uterus."},
                {day: 12, title: "Implantation Starts", desc: "Embryos reach uterus and begin attaching to lining."},
                {day: 18, title: "Placenta Forms", desc: "Embryonic heartbeat detectable by ultrasound (day 20-22)."}
            ]
        },
        {
            title: "Mid Pregnancy (Days 21-45)",
            milestones: [
                {day: 25, title: "Organogenesis", desc: "Critical development period. Avoid medications/stress."},
                {day: 28, title: "Vet Confirmation", desc: "Ultrasound can confirm pregnancy (98% accurate)."},
                {day: 35, title: "Fetal Period", desc: "Toes, whiskers, and facial features develop."},
                {day: 45, title: "Skeletal Calcification", desc: "X-rays can count puppies after day 45."}
            ]
        },
        {
            title: "Late Pregnancy (Days 46-65)",
            milestones: [
                {day: 50, title: "Rapid Growth", desc: "Puppies gain 75% of birth weight. Increase food by 25-50%."},
                {day: 58, title: "Preparation", desc: "Milk production begins. Take rectal temperature twice daily."},
                {day: 61, title: "Early Delivery Possible", desc: "Normal for some breeds. Watch for temperature drop below 99°F (37.2°C)."},
                {day: 63, title: "Expected Delivery", desc: "Average delivery date. 12-24 hours labor is normal."},
                {day: 65, title: "Late Delivery", desc: "Consult vet if no signs of labor by day 65."}
            ]
        }
    ];
    
    stages.forEach(stage => {
        const section = document.createElement('div');
        section.className = 'timeline-section';
        
        const header = document.createElement('div');
        header.className = 'timeline-header';
        header.innerHTML = `
            <span>${stage.title}</span>
            <span class="chevron">›</span>
        `;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        stage.milestones.forEach(milestone => {
            const milestoneDate = new Date(ovulationDate);
            milestoneDate.setDate(milestoneDate.getDate() + milestone.day);
            
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            const today = new Date();
            today.setHours(0,0,0,0); // Compare dates only
            const isPast = milestoneDate < today;
            const isCurrent = milestoneDate.toDateString() === today.toDateString();
            
            item.innerHTML = `
                <h4>Day ${milestone.day}: ${milestone.title} ${isCurrent ? '(Today)' : ''}</h4>
                <p><strong>${milestoneDate.toDateString()}</strong> ${isPast ? '✓' : ''}</p>
                <p>${milestone.desc}</p>
            `;
            
            if (isPast) {
                item.style.opacity = '0.7';
            } else if (isCurrent) {
                item.style.backgroundColor = '#d4edda';
                item.style.padding = '10px';
                item.style.borderRadius = '4px';
            }
            
            content.appendChild(item);
        });
        
        header.addEventListener('click', function() {
            const chevron = this.querySelector('.chevron');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            chevron.classList.toggle('down');
        });
        
        section.appendChild(header);
        section.appendChild(content);
        timelineSections.appendChild(section);
    });
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateDueDate);
});