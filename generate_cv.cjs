const puppeteer = require('puppeteer');

const data = {
  "settings": {
    "full_name": "Muhammad Waqar Saeed",
    "profession": "Web Developer & Teacher",
    "about_me": "I’m a Web Developer and Teacher with a passion for building web applications and helping others develop their technical skills. I have experience working with React.js, Laravel, MySQL, HTML, CSS, JavaScript, and the MERN stack. Alongside development, I have 3+ years of experience teaching, currently serving as Faculty of Web Development at APTECH.",
    "github_url": "github.com/wakku95",
    "contact_email": "saeedmuhammadwaqar@gmail.com",
    "contact_phone": "+923032404609",
    "linkedin_url": "linkedin.com/in/muhammad-waqar-saeed-5019052ab"
  },
  "experiences": [
    {
      "title": "Faculty of Web Development",
      "subtitle": "Aptech Computer Education",
      "description": "Teaching modern Web Development courses and helping students build practical skills in modern technologies.",
      "metadata": { "start_date": "Apr 2026", "end_date": "Present" }
    },
    {
      "title": "Primary School Teacher",
      "subtitle": "Sindh Education Department",
      "description": "Fostering a supportive learning environment for students in the primary education sector.",
      "metadata": { "start_date": "Dec 2022", "end_date": "Present" }
    },
    {
      "title": "General Banking Officer",
      "subtitle": "Bank Al Habib",
      "description": "Operations Department. Handled clearing, remittance, and account opening procedures.",
      "metadata": { "start_date": "Apr 2019", "end_date": "Dec 2022" }
    }
  ],
  "education": [
    {
      "title": "BSCS",
      "subtitle": "Dadabhoy Institute",
      "description": "Bachelors in Computer Science",
      "metadata": { "start_date": "2015", "end_date": "2019" }
    },
    {
      "title": "B.Ed",
      "subtitle": "Allama Iqbal Open Univ",
      "description": "Bachelors In Education",
      "metadata": { "start_date": "2023", "end_date": "2025" }
    },
    {
      "title": "ACCP Pro",
      "subtitle": "Aptech",
      "description": "3 Yrs Diploma in Software Dev",
      "metadata": { "start_date": "2015", "end_date": "2018" }
    }
  ],
  "projects": [
    {
      "title": "Raabta Now",
      "subtitle": "Matrimonial Platform",
      "description": "Highly secure platform featuring SMS OTP verification, automated Safepay payment gateways, and a comprehensive admin dashboard for matchmaking.",
      "primary_link": "raabtanow.com",
      "metadata": { "tech_stack": ["React", "Laravel", "Tailwind", "MySQL"] }
    },
    {
      "title": "Time Table Generator",
      "subtitle": "Automation Web App",
      "description": "React.js application for automating school timetable creation. Features conflict detection, dashboard management, and one-click generation.",
      "primary_link": "time-table7.netlify.app",
      "metadata": { "tech_stack": ["React", "Tailwind CSS"] }
    }
  ],
  "skills": [
    "React.js", "Laravel", "Node.js", "MySQL", "MongoDB", "Tailwind CSS", "Git/GitHub", "MERN Stack"
  ]
};

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            color: #2d3748;
            margin: 0;
            padding: 0;
            background: #fff;
            font-size: 11px; /* Smaller font to fit one page */
            line-height: 1.4;
        }
        /* Top Header */
        .header {
            background-color: #0f1b61;
            color: #fff;
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-left h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px; color: #fff;}
        .header-left .tagline { font-size: 14px; color: #aadcec; margin-top: 5px; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px;}
        .header-right { text-align: right; font-size: 10px; }
        .header-right p { margin: 4px 0; display: flex; align-items: center; justify-content: flex-end; gap: 8px;}
        .header-right i { color: #aadcec; width: 14px; text-align: center; }

        /* Main Content 2 Column Layout */
        .container {
            display: flex;
            padding: 25px 40px;
            gap: 30px;
            height: calc(100vh - 120px);
        }
        
        .left-col { width: 35%; border-right: 1px solid #e2e8f0; padding-right: 25px; }
        .right-col { width: 65%; }

        h2 {
            font-size: 16px;
            color: #0f1b61;
            margin: 0 0 15px 0;
            padding-bottom: 5px;
            border-bottom: 2px solid #7f00e0;
            display: flex;
            align-items: center;
            gap: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        h2 i { color: #7f00e0; }

        .section { margin-bottom: 25px; }

        /* About */
        .about-text { text-align: justify; margin-top: 0; color: #4a5568;}

        /* Skills */
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .skill-badge {
            background: #f4f9fc;
            color: #0f1b61;
            border: 1px solid #aadcec;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 600;
        }

        /* Education & Experience Items */
        .item { margin-bottom: 16px; position: relative; }
        .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
        .item-title { font-weight: 700; font-size: 12px; color: #1a202c; margin: 0;}
        .item-date { font-size: 10px; color: #718096; font-weight: 600; white-space: nowrap;}
        .item-subtitle { font-weight: 600; color: #7f00e0; font-size: 11px; margin: 0 0 4px 0;}
        .item-desc { color: #4a5568; margin: 0; }
        .item-tech { font-size: 10px; font-weight: 600; color: #718096; margin-top: 4px;}

        /* Projects */
        .project-link { color: #7f00e0; text-decoration: none; font-size: 10px; font-weight: 600; }
        .project-link:hover { text-decoration: underline; }

    </style>
</head>
<body>
    <div class="header">
        <div class="header-left">
            <h1>${data.settings.full_name}</h1>
            <div class="tagline">${data.settings.profession}</div>
        </div>
        <div class="header-right">
            <p><a style="color: #fff; text-decoration: none;" href="mailto:${data.settings.contact_email}">${data.settings.contact_email}</a> <i class="fas fa-envelope"></i></p>
            <p>${data.settings.contact_phone} <i class="fas fa-phone"></i></p>
            <p>${data.settings.linkedin_url} <i class="fab fa-linkedin"></i></p>
            <p>${data.settings.github_url} <i class="fab fa-github"></i></p>
        </div>
    </div>

    <div class="container">
        <!-- Left Column -->
        <div class="left-col">
            <div class="section">
                <h2><i class="fas fa-user"></i> Profile</h2>
                <p class="about-text">${data.settings.about_me}</p>
            </div>

            <div class="section">
                <h2><i class="fas fa-code"></i> Skills</h2>
                <div class="skills-grid">
                    ${data.skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
                </div>
            </div>

            <div class="section">
                <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                ${data.education.map(edu => `
                    <div class="item">
                        <div class="item-header">
                            <h3 class="item-title">${edu.title}</h3>
                            <span class="item-date">${edu.metadata.start_date} – ${edu.metadata.end_date}</span>
                        </div>
                        <h4 class="item-subtitle">${edu.subtitle}</h4>
                        <p class="item-desc">${edu.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Right Column -->
        <div class="right-col">
            <div class="section">
                <h2><i class="fas fa-briefcase"></i> Experience</h2>
                ${data.experiences.map(exp => `
                    <div class="item">
                        <div class="item-header">
                            <h3 class="item-title">${exp.title}</h3>
                            <span class="item-date">${exp.metadata.start_date} – ${exp.metadata.end_date}</span>
                        </div>
                        <h4 class="item-subtitle">${exp.subtitle}</h4>
                        <p class="item-desc">${exp.description}</p>
                    </div>
                `).join('')}
            </div>

            <div class="section" style="margin-top: 30px;">
                <h2><i class="fas fa-project-diagram"></i> Projects</h2>
                ${data.projects.map(proj => `
                    <div class="item">
                        <div class="item-header">
                            <h3 class="item-title">${proj.title} <a class="project-link" href="https://${proj.primary_link}"><i class="fas fa-external-link-alt" style="margin-left:4px;"></i></a></h3>
                        </div>
                        <h4 class="item-subtitle">${proj.subtitle}</h4>
                        <p class="item-desc">${proj.description}</p>
                        <div class="item-tech"><i class="fas fa-layer-group"></i> ${proj.metadata.tech_stack.join(' • ')}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
</body>
</html>
`;

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
        });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: 'c:\\Users\\MM COMPUTERS\\Desktop\\projects\\react\\portfolio-frontend\\public\\Waqar_Saeed_CV.pdf',
            format: 'A4',
            printBackground: true,
            margin: { top: '0', bottom: '0', left: '0', right: '0' }
        });

        await browser.close();
        console.log("Modern PDF generated successfully!");
    } catch (e) {
        console.error("Error generating PDF:", e);
    }
})();
