// script.js

// Specialist data
const specialists = [
    {
        id: 1,
        name: "Spesialis Anak",
        icon: "fas fa-child",
        description: "Dokter spesialis untuk masalah kesehatan anak-anak",
        count: 1
    },
    {
        id: 2,
        name: "Spesialis Kandungan",
        icon: "fas fa-female",
        description: "Dokter spesialis untuk kesehatan wanita dan kehamilan",
        count: 1
    },
    {
        id: 3,
        name: "Spesialis Penyakit Dalam",
        icon: "fas fa-heartbeat",
        description: "Dokter spesialis untuk penyakit organ dalam",
        count: 3
    },
    {
        id: 4,
        name: "Spesialis Bedah",
        icon: "fas fa-procedures",
        description: "Dokter spesialis untuk tindakan operasi",
        count: 2
    },
    {
        id: 5,
        name: "Spesialis Kulit dan Kelamin",
        icon: "fas fa-allergies",
        description: "Dokter spesialis untuk masalah kulit dan kelamin",
        count: 1
    },
    {
        id: 6,
        name: "Spesialis Mata",
        icon: "fas fa-eye",
        description: "Dokter spesialis untuk masalah mata",
        count: 1
    },
    {
        id: 7,
        name: "Spesialis THT",
        icon: "fas fa-deaf",
        description: "Dokter spesialis untuk Telinga, Hidung, dan Tenggorokan",
        count: 1
    },
    {
        id: 8,
        name: "Spesialis Gigi dan Mulut",
        icon: "fas fa-tooth",
        description: "Dokter spesialis untuk kesehatan gigi dan mulut",
        count: 1
    },
     {
        id: 9,
        name: "Spesialis Rehabilitasi Medik",
        icon: "fas fa-wheelchair",
        description: "Dokter spesialis untuk Rehabiltasi Medik",
        count: 1
    },
     {
        id: 10,
        name: "Spesialis Bedah Mulut",
        icon: "fas fa-tooth",
        description: "Dokter spesialis Bedah Mulut",
        count: 1
    },
    {
        id: 11,
        name: "Spesialis Penyakit Mulut",
        icon: "fas fa-tooth",
        description: "Dokter spesialis Penyakit Mulut",
        count: 1
    },
    {
        id: 12,
        name: "Spesialis Gizi dan Nutrisi",
        icon: "fas fa-apple-alt",
        description: "Dokter spesialis Gizi dan Nutrisi",
        count: 1
    },
     {
        id: 13,
        name: "Spesialis Paru dan Pernafasan",
        icon: "fas fa-lungs",
        description: "Dokter spesialis Paru dan Pernafasan",
        count: 2
    },
      {
        id: 14,
        name: "Spesialis Ginekologi Onkologi",
        icon: "fas fa-female",
        description: "Dokter spesialis Kandungan dan Sub spesialis Ginekologi Onkologi",
        count: 1
    },
    
];

// Sample doctor data for scheduling
const doctors = [
    {
        id: 9,
        name: "dr. Natalia Nanlohy, Sp.K.F.R",
        specialist: "Spesialis Rehabilitasi Medik",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" },
        ],
        rating: 4.8,
        photo: "https://rsudmasohi.com/upload/photos/2024/04/pp9qXDpRQK52AhHRr1Wt_25_6f5a080a604314c0c679adeccfd59fe4_image.jpg",
    },
    {
        id: 1,
        name: "dr. Diana Wati, Sp.A.M.Kes",
        specialist: "Spesialis Anak",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" }
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",
    },
    {
        id: 8,
        name: "drg. Lisa A. Tuasikal",
        specialist: "Spesialis Gigi dan Mulut",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" }
        ],
        rating: 4.7,
        photo: "https://rsudmasohi.com/upload/photos/2024/04/QOweSEvTW3TAEinmGRqO_27_9f59ebdaff8fd935ef0023dc2ada1b47_image.jpg",

    },
    {
        id: 10,
        name: "drg. Melisa Ruth, Sp.BMM",
        specialist: "Spesialis Bedah Mulut",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" }
        ],
        rating: 4.7,
        photo: "https://rsudmasohi.com/upload/photos/2024/04/bSvXsR3PdlJlpkSCxUzY_25_1ea46b658e081f08d1189b9de4546b79_image.png",

    },
    {
        id: 2,
        name: "dr. Wahyuni H. Talaohu, Sp.OG",
        specialist: "Spesialis Kandungan",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" }
           
        ],
        rating: 4.9,
       photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",

    },
     {
        id: 3,
        name: "dr. Abigail Prasetyaningtyas, Sp.PD",
        specialist: "Spesialis Penyakit Dalam",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
           
        ],
        rating: 4.9,
       photo : "https://rsudmasohi.com/upload/photos/2024/04/QEkEo5AywIoFgJ9FSVz9_24_9ea565697277e72c541dcf9b5f6582d8_image.jpeg",

    },
     {
        id: 3,
        name: "dr. Erny Alasiry, Sp.PD",
        specialist: "Spesialis Penyakit Dalam",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" }, 
        ],
        rating: 4.9,
       photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",

    },
      {
        id: 3,
        name: "dr. Rosmince Beatrix Wattimury Sp.PD",
        specialist: "Spesialis Penyakit Dalam",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
       photo :"https://rsudmasohi.com/upload/photos/2025/01/C6aydQ9VmBz1W6ODSDzd_13_8e5a4cb36041275c58c2c70fab44381b_image.jpeg",

    },
    {
        id: 4,
        name: "dr. Hery Siswanto, Sp.B, FICS FINACS",
        specialist: "Spesialis Bedah",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
             { day: "Jumat", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
       photo :"https://rsudmasohi.com/upload/photos/2025/06/PCM1leSsWogIqHLiy2Cr_11_f996625590fbde26d8138b011cbad554_image.jpeg",

    },
    {
     id: 4,
        name: "dr. Syarif Malawat, Sp.B",
        specialist: "Spesialis Bedah",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Kamis", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",
    },
    {
     id: 5,
        name: "dr. Dyah Ayu Nirmalasari, sp. DV",
        specialist: "Spesialis Kulit dan Kelamin",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",
    },
     {
     id: 6,
        name: "dr. M. Saleh Tualeka, Sp.M.M.Kes",
        specialist: "Spesialis Mata",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",
    },
    {
     id: 7,
        name: "dr. Amrollah Latupono, SpTHT-BKL,Mars",
        specialist: "Spesialis THT",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/photos/2024/04/8bTmBgS2PtxTfX8EtGXW_19_9f7706cc26a307df54fdbea69c32f8a3_image.jpg",
    },
    {
     id: 11,
        name: "drg. Winda Dwi Malinda Masuku, Sp.PM",
        specialist: "Spesialis Penyakit Mulut",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Rabu", time: "08:00 - 12:00" },
             { day: "Kamis", time: "08:00 - 12:00" },
              { day: "Jumat", time: "08:00 - 12:00" },
               { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/photos/2024/05/ThYdTQzHyY3lWM96Kl56_02_1eb4c51da22d1eb1f0bce035f572b4c6_image.jpeg",
    },
    {
     id: 12,
        name: "dr. Mellyana Kusuma Atmanegara, M.Kes,Sp.GK",
        specialist: "Spesialis Gizi dan Nutrisi",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
            { day: "Kamis", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/photos/2025/02/TLc9ctCoDwQWu4ssDwNE_16_668ed618d2164d0c4c9669aab7cd123a_image.jpg",
    },
    {
     id: 13,
        name: "dr. Yorike Elizabeth. Latuheru, Sp.P",
        specialist: "Spesialis Paru dan Pernafasan",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Senin", time: "08:00 - 12:00" },
            { day: "Selasa", time: "08:00 - 12:00" },
            { day: "Rabu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/photos/2024/07/H8DF4d5KYymjRE8efbnO_16_86537abb33e14dd99db27f8f5729a44c_image.jpeg",
    },
    {
     id: 13,
        name: "dr. Reza Fahlefi Amahoru Sp.P",
        specialist: "Spesialis Paru dan Pernafasan",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Kamis", time: "08:00 - 12:00" },
            { day: "Jumat", time: "08:00 - 12:00" },
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
        photo : "https://rsudmasohi.com/upload/photos/2025/03/S8djLZCdcWoyihd3LbFH_21_10d163300b3aa25bbd1f03929d600814_image.jpeg",
    },
     {
     id: 14,
        name: "dr. Rachmat Ramadhani Tuasikal, Sp.OG., Subsp. Onk",
        specialist: "Spesialis Ginekologi Onkologi",
        hospital: "RSUD Masohi",
        schedule: [
            { day: "Sabtu", time: "08:00 - 12:00" },
        ],
        rating: 4.9,
         photo : "https://rsudmasohi.com/upload/default/photos/user_avatar.jpg",
    },
];


// DOM Elements
const specialistsGrid = document.getElementById('specialistsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderSpecialists(specialists);
});

// Render specialists grid
function renderSpecialists(specialistsArray) {
    specialistsGrid.innerHTML = '';
    
    // Bersihkan hasil pencarian dokter sebelumnya jika ada
    const searchResultsInfo = document.querySelector('.search-results-info');
    if (searchResultsInfo) {
        searchResultsInfo.remove();
    }
    
    specialistsArray.forEach(specialist => {
        const card = document.createElement('div');
        card.className = 'specialist-card';
        card.innerHTML = `
            <div class="specialist-icon">
                <i class="${specialist.icon}"></i>
            </div>
            <div class="specialist-info">
                <h3>${specialist.name}</h3>
                <p>${specialist.description}</p>
                <p><strong>${specialist.count} Dokter</strong> tersedia</p>
                <button class="view-schedule-btn">Lihat Jadwal</button>
            </div>
        `;
        
        // Add click event to view schedule button
        const viewScheduleBtn = card.querySelector('.view-schedule-btn');
        viewScheduleBtn.addEventListener('click', () => {
            showDoctorSchedule(specialist.name);
        });
        
        specialistsGrid.appendChild(card);
    });
}

    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });


// Perform search
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        // Cari spesialis yang cocok
        const filteredSpecialists = specialists.filter(specialist => 
            specialist.name.toLowerCase().includes(searchTerm) || 
            specialist.description.toLowerCase().includes(searchTerm)
        );
        
        // Cari dokter yang cocok
        const filteredDoctors = doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(searchTerm) || 
            doctor.specialist.toLowerCase().includes(searchTerm) ||
            doctor.hospital.toLowerCase().includes(searchTerm)
        );
        
        // Jika ada dokter yang cocok, tampilkan spesialis terkait
        if (filteredDoctors.length > 0) {
            // Dapatkan spesialis unik dari dokter yang cocok
            const specialistNames = [...new Set(filteredDoctors.map(doctor => doctor.specialist))];
            const specialistsToShow = specialists.filter(specialist => 
                specialistNames.includes(specialist.name)
            );
            
            renderSpecialists(specialistsToShow);
            
            // Tampilkan informasi tambahan tentang dokter yang ditemukan
            if (filteredDoctors.length > 0) {
                let doctorInfoHTML = '<div class="search-results-info">';
                doctorInfoHTML += `<h3>Menemukan ${filteredDoctors.length} dokter yang cocok:</h3>`;
                
                filteredDoctors.forEach(doctor => {
                    doctorInfoHTML += '<div class="search-result">';
                    doctorInfoHTML += `<h4>${doctor.name}</h4>`;
                    doctorInfoHTML += `<p><strong>Spesialis:</strong> ${doctor.specialist}</p>`;
                    doctorInfoHTML += `<p><strong>Rumah Sakit:</strong> ${doctor.hospital}</p>`;
                    doctorInfoHTML += `<p><strong>Rating:</strong> ${doctor.rating} <i class="fas fa-star star-icon"></i></p>`;
                    doctorInfoHTML += '</div>';
                });
                
                doctorInfoHTML += '</div>';
                specialistsGrid.insertAdjacentHTML('afterend', doctorInfoHTML);
            }
        } else if (filteredSpecialists.length > 0) {
            // Jika tidak ada dokter yang cocok tapi ada spesialis yang cocok
            renderSpecialists(filteredSpecialists);
        } else {
            // Jika tidak ada yang cocok
            specialistsGrid.innerHTML = `
                <div class="no-results">
                    <p>Tidak ditemukan hasil untuk "${searchTerm}". Silakan coba kata kunci lain.</p>
                </div>
            `;
        }
    } else {
        renderSpecialists(specialists);
        
        // Hapus info hasil pencarian dokter jika ada
        const searchResultsInfo = document.querySelector('.search-results-info');
        if (searchResultsInfo) {
            searchResultsInfo.remove();
        }
    }
}

// Show doctor schedule
function showDoctorSchedule(specialistName) {
    // Find all doctors with the same specialist
    const doctorsWithSpecialist = doctors.filter(d => d.specialist === specialistName);
    
    if (doctorsWithSpecialist.length > 0) {
        let scheduleHTML = '<div class="schedule-container">';
        
        // Add title
        scheduleHTML += `<h3>Dokter ${specialistName}</h3>`;
        
        // Loop through each doctor and create their schedule section
        doctorsWithSpecialist.forEach(doctor => {
            scheduleHTML += '<div class="doctor-card">';
            scheduleHTML += '<div class="doctor-header">';
            scheduleHTML += `<img src="${doctor.photo}" alt="${doctor.name}" class="doctor-photo">`;
            scheduleHTML += '<div class="doctor-info">';
            scheduleHTML += `<h4>${doctor.name}</h4>`;
            scheduleHTML += `<p>Spesialis: ${doctor.specialist}</p>`;
            scheduleHTML += `<p>Rumah Sakit: ${doctor.hospital}</p>`;
            scheduleHTML += `<p>Rating: ${doctor.rating} <i class="fas fa-star star-icon"></i></p>`;
            scheduleHTML += '</div>';
            scheduleHTML += '</div>';
            scheduleHTML += '<h5>Jadwal Praktik:</h5>';
            scheduleHTML += '<ul>';
            
            doctor.schedule.forEach(slot => {
                scheduleHTML += `<li><strong>${slot.day}:</strong> ${slot.time}</li>`;
            });
            
            scheduleHTML += '</ul>';
            // Tambahkan tombol WhatsApp untuk setiap dokter
            scheduleHTML += `<button class="whatsapp-btn" data-doctor="${encodeURIComponent(doctor.name)}" data-specialist="${encodeURIComponent(doctor.specialist)}" data-hospital="${encodeURIComponent(doctor.hospital)}">Salin via WhatsApp</button>`;
            scheduleHTML += '</div>';
        });
        
        scheduleHTML += '</div>';
        
        // Create a modal for the schedule
        const scheduleModal = document.createElement('div');
        scheduleModal.className = 'modal';
        scheduleModal.id = 'scheduleModal';
        scheduleModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Jadwal Dokter</h3>
                    <button class="close-btn" id="closeScheduleBtn">&times;</button>
                </div>
                <div class="modal-body">
                    ${scheduleHTML}
                </div>
            </div>
        `;
        
        document.body.appendChild(scheduleModal);
        scheduleModal.style.display = 'flex';
        
        // Add event listeners for the schedule modal
        document.getElementById('closeScheduleBtn').addEventListener('click', () => {
            scheduleModal.remove();
        });
        
        // Tambahkan event listener untuk tombol WhatsApp
        const whatsappButtons = scheduleModal.querySelectorAll('.whatsapp-btn');
        whatsappButtons.forEach(button => {
            button.addEventListener('click', () => {
                const doctorName = decodeURIComponent(button.dataset.doctor);
                const specialist = decodeURIComponent(button.dataset.specialist);
                const hospital = decodeURIComponent(button.dataset.hospital);
                
                // Format jadwal dokter
                let scheduleText = "";
                const doctor = doctors.find(d => d.name === doctorName && d.specialist === specialist);
                if (doctor && doctor.schedule) {
                    scheduleText = "Jadwal Praktik:%0A";
                    doctor.schedule.forEach(slot => {
                        scheduleText += `%0A${slot.day}: ${slot.time}`;
                    });
                }
                
                // Buat pesan WhatsApp dengan jadwal dokter
                const message = `%0A%0ANama Dokter: ${doctorName}%0ASpesialis: ${specialist}%0ARumah Sakit: ${hospital}%0A%0A${scheduleText}%0A%0ATanggal yang diinginkan: %0AWaktu yang diinginkan: `;
                
                // Buka WhatsApp dengan pesan otomatis
                window.open(`https://wa.me/?text=${message}`, '_blank');
                
                // Tutup modal
                scheduleModal.remove();
            });
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === scheduleModal) {
                scheduleModal.remove();
            }
        });
    } else {
        alert(`Jadwal untuk ${specialistName} akan segera tersedia!`);
    }
}
