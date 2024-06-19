const sidebar = document.getElementById('sidebar');
        const openSidebarBtn = document.getElementById('open-sidebar-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar-btn');

        openSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });

        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });


        
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.category-btn');
            const carGrids = document.querySelectorAll('.car-grid');
    
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
    
                    // Remove active class from all buttons
                    buttons.forEach(btn => btn.classList.remove('bg-gray-800', 'text-white'));
                    // Add active class to the clicked button
                    button.classList.add('bg-gray-800', 'text-white');
    
                    // Hide all car grids
                    carGrids.forEach(grid => grid.classList.add('hidden'));
                    // Show the selected car grid
                    document.getElementById(`car-grid-${category}`).classList.remove('hidden');
                });
            });
    
            // Show the first category by default
            if (buttons.length > 0) {
                buttons[0].click();
            }
        });
        



