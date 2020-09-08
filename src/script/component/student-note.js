class StudentNote extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1>Student Note</h1>
                <br />
                <h4>Berikut merupakan catatan dalam pengembangan proyek ini:</h4>
                <ul class="list-group">
                    <li class="list-group-item">Penulisan kode pada proyek submission ini sudah menerapkan standar ES6
                        sintaks pada beberapa file .js</li>
                    <li class="list-group-item">Sudah menerapkan custom element pada app-bar dan student-note.</li>
                    <li class="list-group-item">Menggunakan Webpack sebagai module bundler (tahap produksi).</li>
                    <li class="list-group-item">Memanfaatkan Webpack sebagai environment dalam pengembangan proyek
                        (tahap development).</li>
                    <li class="list-group-item">Memanfaatkan API dengan konsep AJAX untuk mendapatkan data film dari
                        situs OMDB.</li>
                    <li class="list-group-item">Memanfaatkan jQuery (AJAX) dan Bootstrap (responsif).</li>
                    <li class="list-group-item">Proyek dikerjakan selama ± 1 bulan karena butuh pemahaman mendalam
                        mengenai materi-materi pada kelas fundamental front-end web development.</li>
                    <li class="list-group-item">Terima kasih atas ilmunya, sangat bermanfaat. Semoga dicoding sukses
                        selalu :)</li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

customElements.define("student-note", StudentNote);