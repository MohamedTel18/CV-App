# CV Builder Application

A modern, responsive CV (Curriculum Vitae) builder built with React and Vite. This application allows users to create, edit, and export professional CVs with ease.

## 🚀 Features

- **Interactive Form Builder**: Easy-to-use forms for entering personal information, education, and work experience
- **Real-time Preview**: Live preview of your CV as you build it
- **PDF Export**: Download your CV as a PDF file
- **Print Functionality**: Print your CV directly from the browser
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and professional interface

## 📋 Sections Included

1. **General Information**
   - Full Name
   - Email Address
   - Phone Number

2. **Education**
   - School/University Name
   - Degree/Title of Study
   - Graduation Date
   - Multiple education entries supported

3. **Professional Experience**
   - Company Name
   - Position Title
   - Employment Duration (From - To)
   - Job Responsibilities
   - Multiple experience entries supported

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **html2canvas** - For PDF generation
- **jsPDF** - PDF creation library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedTel18/CV-App.git
   cd CV-App/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 How to Use

1. **Fill in your information**
   - Start with the General Information section
   - Add your education background
   - Include your work experience

2. **Edit and manage entries**
   - Click "Add" to create new entries
   - Click "Edit" to modify existing information
   - Use "Remove" to delete unwanted entries

3. **Preview your CV**
   - Click "Submit All" to see the formatted CV preview
   - Review all sections and formatting

4. **Export your CV**
   - Use the "Download PDF" button to save as PDF
   - Use the "Print CV" button to print directly
   - Click "← Back to Edit" to make changes

## 📁 Project Structure

```
CV-App/
├── app/
│   ├── src/
│   │   ├── component/
│   │   │   ├── cv-preview.jsx     # CV preview and export functionality
│   │   │   ├── education.jsx      # Education form component
│   │   │   ├── experience.jsx     # Experience form component
│   │   │   └── genrale.jsx        # General information form
│   │   ├── styles/
│   │   │   ├── index.css          # Main styles
│   │   │   ├── cv-preview.css     # Preview page styles
│   │   │   ├── education.css      # Education form styles
│   │   │   ├── experience.css     # Experience form styles
│   │   │   └── generale.css       # General form styles
│   │   ├── app.jsx                # Main application component
│   │   └── main.jsx               # Application entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

The application uses modular CSS files for each component, making it easy to customize the appearance:

- Modify component-specific styles in the `src/styles/` directory
- Update colors, fonts, and layout in the respective CSS files
- The CV preview layout can be customized in `cv-preview.css`

## 👨‍💻 Author

**Mohamed Tel** - [GitHub Profile](https://github.com/MohamedTel18)

## 🐛 Known Issues

- Ensure you fill in all required fields before generating the preview
- PDF generation requires a modern browser with JavaScript enabled

## 🔮 Future Enhancements

- [ ] Additional CV templates
- [ ] Skills section
- [ ] Photo upload functionality
- [ ] Multiple language support
- [ ] Cloud storage integration
- [ ] More export formats (Word, etc.)

---

**Happy CV Building! 🎉**