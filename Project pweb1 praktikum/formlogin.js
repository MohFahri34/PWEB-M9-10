function validateForm(role) {
    // Ambil nilai dari input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Periksa apakah username dan password sudah diisi
    if (username === "" || password === "") {
        alert("Mohon isi Username dan Password terlebih dahulu.");
        return false; // Tidak lanjutkan aksi tombol
    }
    
    // Jika validasi berhasil, arahkan ke halaman berdasarkan peran
    if (role === "admin") {
        window.location.href = "luxuryhotel.html"; // Arahkan ke halaman Admin
    } else if (role === "user") {
        window.location.href = "luxuryhotel.html"; // Arahkan ke halaman User
    }
}