$(document).ready(function() {
    // Initialize the page
    console.log("jQuery Mobile website is ready!");
    
    // Add a custom transition effect between pages
    $.mobile.defaultPageTransition = 'slide';
    
    // Handle form submission
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        // Simple validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert('Thank you for your message, ' + name + '! We will contact you soon.');
            
            // Clear the form
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        } else {
            alert('Please fill out all fields.');
        }
    });
    
    // Add a swipe event for navigation
    $(document).on('swipeleft', '.ui-page', function() {
        // Get the ID of the current page
        var currentPage = $.mobile.activePage.attr('id');
        
        // Define the navigation flow
        if (currentPage === 'home') {
            $.mobile.navigate('#about');
        } else if (currentPage === 'about') {
            $.mobile.navigate('#contact');
        }
    });
    
    $(document).on('swiperight', '.ui-page', function() {
        // Get the ID of the current page
        var currentPage = $.mobile.activePage.attr('id');
        
        // Define the navigation flow
        if (currentPage === 'contact') {
            $.mobile.navigate('#about');
        } else if (currentPage === 'about') {
            $.mobile.navigate('#home');
        }
    });
});
