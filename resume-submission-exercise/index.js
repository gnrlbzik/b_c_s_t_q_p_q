import Koa from 'koa';

const PORT = process.env.PORT || 3000
const app = new Koa();

app.use(async ctx => {
    let body = 'OK';

    switch (ctx.query.q) {
        case 'Degree': // request query { q: 'Degree', d: 'Please list your relevant university degree(s).' }
            body = 'Partially completed bachelor in media arts and animation at The Illinois Institute of Art - Chicago';
            break;

        case 'Email Address': // request query { q: 'Email Address', d: 'What is your email address?' }
            body = 'alesei.n@bzik.net';
            break;

        case 'Status': // { q: 'Status', d: 'Can you provide proof of eligibility to work in the US?' }
            body = 'Yes, I am United States Citizen';
            break;

        case 'Puzzle': // request query { q: 'Puzzle', d: 'Please solve this puzzle:\n ABCD\nA---<\nB-->-\nC--->\nD---=\n' }
            body = ' ABCD\nA=<<>\nB>=>>\nC><=>\nD<<<=';
            break;

        case 'Referrer': // request query { q: 'Referrer', d: 'How did you hear about this position?' }
            body = 'Dillon Johnston @ atlantic-grp.com';
            break;

        case 'Position': // request query { q: 'Position', d: 'Which position are you applying for?' }
            body = 'Full Stack Engineer @ Balihoo';
            break;

        case 'Name': // request query { q: 'Name', d: 'What is your full name?' }
            body = 'Alesei Narkevitch';
            break;

        case 'Years': // request query { q: 'Years', d: 'How many years of software development experience do you have?' }
            body = 'Over a decade';
            break;

        case 'Source': // request query { q: 'Source', d: 'Please provide a URL where we can download the source code of your resume submission web service.' }
            body = 'https://github.com/gnrlbzik/b_c_s_t_q_p_q/tree/master/resume-submission-exercise';
            break;

        case 'Resume': // request query { q: 'Resume', d: 'Please provide a URL where we can download your resume and cover letter.' }
            body = 'https://www.linkedin.com/in/aleseinarkevitch/';
            break;

        case 'Phone': // request query { q: 'Phone', d: 'Please provide a phone number we can use to reach you.' }
            body = '224.392.2592';
            break;

        case 'Ping': // request query { q: 'Ping', d: 'Please return OK so that I know your service works.' }
        default:
            // do nothing body is set by default to OK on line 7
    }
    ctx.body = body;
});

app.listen(PORT);
