document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const bookingList = document.getElementById('booking-list');
    const services = ['Exterior Standard', 'Exterior Premium', 'Interior Detailing', 'Window Tintin']; 

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const name = bookingForm.elements['name'].value;
        const phone = bookingForm.elements['phone'].value;
        const service = bookingForm.elements['service'].value;
        const date = bookingForm.elements['date'].value;
        const time = bookingForm.elements['time'].value;

        const bookingCard = document.createElement('div');
        bookingCard.classList.add('booking-card');
        bookingCard.innerHTML = `
            <h2>${service}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <div class="booking-details">
                <p>Confirmation number: ABC123</p>
                <!-- Add more details as needed -->
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

      
        bookingList.appendChild(bookingCard);

        bookingForm.reset();

        
        const editBtn = bookingCard.querySelector('.edit-btn');
        const deleteBtn = bookingCard.querySelector('.delete-btn');

        editBtn.addEventListener('click', function() {
           
            const editForm = document.createElement('form');
            editForm.innerHTML = `
                <select id="edit-service" name="edit-service">
                    ${services.map(service => `<option value="${service}" ${service === service ? 'selected' : ''}>${service}</option>`).join('')}
                </select>
                <input type="text" id="edit-name" name="edit-name" value="${name}" placeholder="Name" required>
                <input type="text" id="edit-phone" name="edit-phone" value="${phone}" placeholder="Phone" required>
                <input type="date" id="edit-date" name="edit-date" value="${date}" placeholder="Date" required>
                <input type="time" id="edit-time" name="edit-time" value="${time}" placeholder="Time" required>
                <button type="submit" class="save-btn">Save</button>
                <button type="button" class="cancel-btn">Cancel</button>
            `;

            bookingCard.innerHTML = '';
            bookingCard.appendChild(editForm);

         
            editForm.addEventListener('submit', function(event) {
                event.preventDefault();
            
                const updatedService = editForm.elements['edit-service'].value;
                const updatedName = editForm.elements['edit-name'].value;
                const updatedPhone = editForm.elements['edit-phone'].value;
                const updatedDate = editForm.elements['edit-date'].value;
                const updatedTime = editForm.elements['edit-time'].value;

                bookingCard.innerHTML = `
                    <h2>${updatedService}</h2>
                    <p><strong>Name:</strong> ${updatedName}</p>
                    <p><strong>Phone:</strong> ${updatedPhone}</p>
                    <p><strong>Date:</strong> ${updatedDate}</p>
                    <p><strong>Time:</strong> ${updatedTime}</p>
                    <div class="booking-details">
                        <p>Confirmation number: ABC123</p>
                        <!-- Add more details as needed -->
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
            });

            const cancelBtn = bookingCard.querySelector('.cancel-btn');
            cancelBtn.addEventListener('click', function() {
               
                bookingCard.innerHTML = `
                    <h2>${service}</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <div class="booking-details">
                        <p>Confirmation number: ABC123</p>
                        <!-- Add more details as needed -->
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
            });
        });

        deleteBtn.addEventListener('click', function() {
          
            bookingCard.remove();
        });
    });
});