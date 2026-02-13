import { IconButton } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";

export const PHONE = '01001902943'

export const lang = { //Backend - Home - footer
    LOGO: 'Steplib',
    LOGO_AR: 'Steplib',//Home Page, ExportAsPdf
    // TEACHER: 'وليدالشافى', Depracated
    Website: 'https://steplib.com', //For Pages
    LOGO_Home_Description: "الصفحه الرئيسيه",//for Home Page
    Contact_Whatsapp: '20' + PHONE,
    // Mail: 'mrwaleedalshafi@gmail.com',
    Course_Description: '', //CoursePage

    SignUp: {
        title: 'انشاء حساب - انشئ حسابك الان على منصه',
        description: "انشئ حسابك الان, وابدا رحلتك فى منصه"
    },
    Privacy: {
        title: 'Privacy - السياسات الخاصه بمنصه',
        description: "كل التفاصيل الخاصه بمنصه"
    },
    Login: {
        title: 'تسجيل الدخول - تسجيل الدخول لمنصه',
        description: "سجل دخولك الان, وابدا رحلتك فى منصه"
    },
    LogoUri: '/assets/logo.webp', //Not done - footerPage
    Socials: [ //Hero - footer
        {
            to: '', image: '/assets/facebook.webp', title: 'صفحه الفيس',
            icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={''}>
                <FaFacebook style={{
                    color: 'inherit',
                }} />
            </IconButton>
        },
        {
            to: '', image: '/assets/youtube.png', title: 'Youtube',
            icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={''}>
                <FiYoutube style={{
                    color: 'inherit',
                }} />
            </IconButton >
        },
        {
            to: "", image: '/assets/Instagram.png', title: 'Instagram', icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={""}>
                <FaInstagram style={{
                    color: 'inherit',
                }} />
            </IconButton >
        },
        {
            to: "https://api.whatsapp.com/send?phone=20" + PHONE, image: '/assets/whatsapp.png', icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={"https://api.whatsapp.com/send?phone=20" + PHONE}> 
            {/* used in footer native */}
                <FaWhatsapp style={{
                    color: 'inherit',
                }} />
            </IconButton>
        },
    ],

    WhatsAppContact: "https://api.whatsapp.com/send?phone=2001001902943&text=" + 'from Step Library Platform',// not done - footer

    LOGOUT: 'تسجيل الخروج',
    GRADES: "السنوات الدراسيه",
    COURSES: 'الكورسات',
    LOGIN_ENTRY: 'تسجيل دخول',
    LOGIN: 'تسجيل',
    ENTRY: "الدخول",

    //user 
    CREATE_USER: "إنشاء مستخدم",
    WALLET: 'المحفظه',
    NAME: 'الاسم ثلاثى',
    EMAIL: 'البريد الالكترونى',
    PHONE: 'رقم الهاتف',
    FAMILY_PHONE: 'هاتف ولى الامر',
    GRADE: 'السنه الدراسيه',
    CODE_optional: 'كود التفعيل (اختيارى)',
    GOVERNMENT: 'المحافظه',
    PASSWORD: 'كلمة السر',
    CONFIRM_PASSWORD: 'اعد كتابه كلمة السر',
    YOUR_SUBSCRIPTIONS: 'اشتراكاتك',
    // login
    USERNAME: "اسم المستخدم",
    CODE: 'كود',

    //getUsers
    USERS_PAGE: 'صفحة المستخدمين',
    IS_ACTIVE: "الحاله",
    ACTIVE: 'فعال',
    NOT_ACTIVE: "غير فعال",
    GROUP: 'المجموعه',
    IMAGE: "صوره",
    ROLE: "الدور",
    ALL: 'الكل',

    //content
    GRADE_CONTENT: 'محتوى الصف',
    LECTURES: 'المحاضرات',
    UNITS: 'الوحدات',
    COURSES_NUMBER: 'عدد الكورسات',
    isActive: 'الحاله',
    CREATE_UNIT: "إنشاء وحده",
    CHOOSE_UNIT: "إختر وحده",
    CREATE_COURSE: "إنشاء كورس",
    CHOOSE_COURSE: "إختر كورس",

    NO_COURSES_IN_THIS_UNIT: "لا يوجد كورسات لهذه الوحده",
    COURSE_DETAILS: 'تفاصيل الكورس',
    COURSE_DESCRIPTION: 'وصف الكورس',

    STATISTICS: 'الإحصائيات',
    SUBSCRIBERS_NUMS: 'عدد المشتركون',
    PRICE: "السعر الفعلى",
    COURSE_NAME: 'اسم الكورس',
    POUND: "جنيها",

    DATA_LOADING: "يتم تحميل البيانات ...!",

    //lecture
    LECTURE: 'محاضره',
    LECTURE_NAME: 'اسم المحاضره',
    LECTURE_DESCRIPTION: 'وصف المحاضره',
    ADD_LECTURE: 'إضافة محاضره',
    NO_LECTURES_IN_THIS_COURSE: 'لا توجد محاضرات في هذا الكورس',
    VIDEO: 'فيديو',
    THUMBNAIL: 'صوره',
    FILES: 'ملفات',
    EXAMS: "الاختبارات",
    PRE_DISCOUNT: 'السعر قبل الخصم',

    TIME: 'الوقت',
    QUESTIONS: 'الاسئله',
    ATTEMPT: 'محاوله',
    ATTEMPTS: 'المحاولات',
    YOUR_ATTEMPTS: 'عدد مرات اداء الاختبار',
    START: "ابدا",
    //errors
    REQUERIED: 'مطلوب',
    ARE_YOU_SURE: "هل انت متاكد ؟",
    AGREE: 'موافق',
    DISAGREE: 'غير موافق'
}