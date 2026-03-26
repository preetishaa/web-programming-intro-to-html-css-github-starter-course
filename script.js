let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendarDays = document.getElementById("calendarDays");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = ["January","February","March","April","May","June",
        "July","August","September","October","November","December"];

    monthYear.textContent = monthNames[month] + " " + year;

    // First day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    calendarDays.innerHTML = "";

    // Empty boxes before first day
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        calendarDays.appendChild(empty);
    }

    // Day numbers
    const today = new Date();
    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        // Highlight today
        if (day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()) {
            dayDiv.classList.add("today");
        }

        calendarDays.appendChild(dayDiv);
    }
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();