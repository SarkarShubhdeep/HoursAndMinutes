$(document).ready(function() {
    var routine = $('#routine-window');
    var cal = $('#calendar');
    var addTask = $('#add-task-window');
    addTask.hide();

    var statsBox = $('#stats-box');
    var userBox = $('#user-box');
    var prefBox = $('#pref-box');
    // userBox.hide();
    // prefBox.hide();
    // statsBox.hide();

    var newRoutineBtn = $('#new-routine-btn');
    var newRoutineWindow = $('#new-routine-window');
    var routineAddTaskBtn = $('#routine-add-new-task-button');
    var routineAddTaskWindow = $('#routine-add-task-window');
    var newRoutineAddTask = $('#new-routine-add-task');
    var cancelRoutine = $('#cancel-new-routine');
    var newRoutineCancelTask = $('#routine-cancel-add-task');
    newRoutineWindow.hide();
    routineAddTaskBtn.hide();
    routineAddTaskWindow.hide();


    newRoutineBtn.click(function() {
        userBox.toggle();
        prefBox.toggle();
        statsBox.toggle();
        routineAddTaskBtn.toggle();
        newRoutineWindow.toggle();
    });
    newRoutineAddTask.click(function() {
        routineAddTaskWindow.show();
    });
    newRoutineCancelTask.click(function() {
        routineAddTaskWindow.hide();
    });
    cancelRoutine.click(function() {
        userBox.toggle();
        prefBox.toggle();
        statsBox.toggle();
        routineAddTaskBtn.hide();
        newRoutineWindow.hide();
        routineAddTaskWindow.hide();
    });

    $('#expand-stats').click(function() {
        $('#expand-stats i').css('transition', '200ms').toggleClass('flip');
    })
    $('#routine-list').click(function() {
        $('#routine-list i').css('transition', '200ms').toggleClass('flip');
    })
    $('#pref-dropdown').click(function() {
        $('#pref-dropdown i').css('transition', '200ms').toggleClass('flip');
    })


    $('#plus-btn').click(function() {
        $('#plus-btn i').toggleClass('cross');
        $('#plus-btn').toggleClass('bg-red');
        addTask.toggle();
        routine.toggle();
        cal.toggle();
    });

    $('#cancel-add-task').click(function() {
        $('#plus-btn i').toggleClass('cross');
        $('#plus-btn').toggleClass('bg-red');
        addTask.toggle();
        routine.toggle();
        cal.toggle();
    });

    // $('#routine-window').fadeToggle();

    // $('#plus-btn').click(function() {
    //     $('#plus-btn i').toggleClass('cross');
    //     $('#plus-btn').toggleClass('bg-red');

    //     cal.toggle();
    //     routine.toggle();

    //     addTask.fadeOut();

    //     // $('#routine').hide();
    // });

    // !-------CALENDAR

    let pastDates = true,
        availableDates = false,
        availableWeekDays = false

    let calendar = new VanillaCalendar({

        selector: "#myCalendar",
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortWeekday: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
        onSelect: (data, elem) => {
            console.log(data, elem)
        },
    })

    let btnPastDates = document.querySelector('[name=pastDates]')
    btnPastDates.addEventListener('click', () => {
        pastDates = !pastDates
        calendar.set({ pastDates: pastDates })
        btnPastDates.innerText = `${(pastDates ? 'Disable' : 'Enable')} past dates`
    })

    let btnAvailableDates = document.querySelector('[name=availableDates]')
    btnAvailableDates.addEventListener('click', () => {
        availableDates = !availableDates
        btnAvailableDates.innerText = `${(availableDates ? 'Clear available dates' : 'Set available dates')}`
        if (!availableDates) {
            calendar.set({ availableDates: [], datesFilter: false })
            return
        }
        let dates = () => {
            let result = []
            for (let i = 1; i < 15; ++i) {
                if (i % 2) continue
                let date = new Date(new Date().getTime() + (60 * 60 * 24 * 1000) * i)
                result.push({ date: `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}` })
            }
            return result
        }
        calendar.set({ availableDates: dates(), availableWeekDays: [], datesFilter: true })
    })

    let btnAvailableWeekDays = document.querySelector('[name=availableWeekDays]')
    btnAvailableWeekDays.addEventListener('click', () => {
        availableWeekDays = !availableWeekDays
        btnAvailableWeekDays.innerText = `${(availableWeekDays ? 'Clear available weekdays' : 'Set available weekdays')}`
        if (!availableWeekDays) {
            calendar.set({ availableWeekDays: [], datesFilter: false })
            return
        }
        let days = [{
            day: 'monday'
        }, {
            day: 'tuesday'
        }, {
            day: 'wednesday'
        }, {
            day: 'friday'
        }]
        calendar.set({ availableWeekDays: days, availableDates: [], datesFilter: true })
    });

    // !-------CALENDAR ENDS




});