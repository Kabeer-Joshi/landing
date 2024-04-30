import DiscussionBanner from '../assets/images/discussion-app/discussion-banner.svg';
import EngageAndEducate from '../assets/images/discussion-app/engage-and-educate.svg';
import Participate from '../assets/images/discussion-app/particiapte.svg';
import RealTimeDynamics from '../assets/images/discussion-app/real-time-dynamics.svg';
import RealTimeEngagement from '../assets/images/discussion-app/real-time-engagement.svg';
import SeamLessIntergation from '../assets/images/discussion-app/seamless-intergation.svg';
import Transform from '../assets/images/discussion-app/transform.svg';

import {
  FaBell,
  FaBullhorn,
  FaChalkboardTeacher,
  FaEnvelopeOpen,
  FaPoll,
  FaUserGraduate,
  FaUsers,
} from 'react-icons/fa';

import { AiFillMobile, AiOutlineLineChart } from 'react-icons/ai';

export const DiscussionData = [
  {
    title: 'Engage and Educate with Goreeva-Discussion.',
    description:
      'Bridge the gap between traditional and digital classrooms. Create a dynamic, inclusive, and informative learning environment with features tailored to both educators and students.',
    image: EngageAndEducate,
    points: [
      'Dynamic environments',
      'Inclusive discussions',
      'Informative content',
      'Educator and student features',
      'Digital classroom bridge',
    ],
  },
  {
    title: 'Secure and Streamlined Classroom Management.',
    description:
      'From secure login to class creation with unique codes, Goreeva-Discussion ensures a safe and efficient educational space. Enhance learning with interactive topic additions.',
    image: Participate,
    points: [
      'Secure login',
      'Unique class codes',
      'Classroom management',
      'Interactive topics',
      'Efficient education',
    ],
  },
  {
    title: 'Foster Real-Time Engagement and Anonymity.',
    description:
      'Encourage active participation with anonymous responses and real-time engagement. Teachers can endorse valuable contributions, fostering a collaborative learning environment.',
    image: RealTimeEngagement,
    points: [
      'Real-time engagement',
      'Anonymous participation',
      'Teacher endorsements',
      'Collaborative environment',
      'Active participation',
    ],
  },
  {
    title: 'Seamless Integration in Digital Learning.',
    description:
      'Goreeva-Discussion integrates seamlessly into digital learning environments, providing educators and students with an interactive platform to enhance the educational experience.',
    image: SeamLessIntergation,
    points: [
      'Digital learning integration',
      'Interactive platform',
      'Educational enhancement',
      'Student engagement',
      'Educator support',
    ],
  },
  {
    title: 'Transform Educational Interactions.',
    description:
      'Join Goreeva-Discussion to bring your classroom into the digital age. Engage in a more interactive learning experience, designed for the future of education.',
    image: Transform,
    points: [
      'Digital age classroom',
      'Interactive learning',
      'Future of education',
      'Student engagement',
      'Educational transformation',
    ],
  },
  {
    title: 'Innovate with Real-Time Classroom Dynamics.',
    description:
      'Experience the power of real-time interactions and collaborative tools in education. Goreeva-Discussion offers a platform where every class is a dynamic space for learning and growth.',
    image: RealTimeDynamics,
    points: [
      'Dynamic learning',
      'Real-time interactions',
      'Collaborative tools',
      'Educational growth',
      'Interactive education',
    ],
  },
  {
    title: 'Empower Participation and Engagement.',
    description:
      'Goreeva-Discussion is designed to empower both educators and students, enabling a more engaged and participative educational environment. Be part of the innovative learning community.',
    image: EngageAndEducate,
    points: [
      'Empowered learning',
      'Engaged environment',
      'Participative education',
      'Innovative community',
      'Learning community growth',
    ],
  },
];

export const DiscussionBannerData = {
  title: 'Where Digital Learning',
  subTitle: 'Meets Interactive Engagement',
  image: DiscussionBanner,
  points: [
    'Interactive discussions',
    'Digital classroom integration',
    'Engaged learning',
    'Innovative education',
  ],
};

export const DiscussionFeatures = [
  {
    id: 1,
    title: 'Secure Login',
    description: '',
    icon: FaEnvelopeOpen,
  },
  {
    id: 2,
    title: 'Class Management',
    description: '',
    icon: FaUserGraduate,
  },
  {
    id: 3,
    title: 'Content Flexibility',
    description: '',
    icon: FaPoll,
  },
  {
    id: 5,
    title: 'Simple Access',
    description: '',
    icon: FaBell,
  },
  {
    id: 6,
    title: 'Student Management',
    description: '',
    icon: FaChalkboardTeacher,
  },
  {
    id: 7,
    title: 'Active Participation',
    description: '',
    icon: AiFillMobile,
  },
  {
    id: 8,
    title: 'Real-Time Engagement',
    description: '',
    icon: AiOutlineLineChart,
  },
  {
    id: 9,
    title: 'Participation Encouragement',
    description: '',
    icon: FaBullhorn,
  },
  {
    id: 10,
    title: 'Exemplary Response Highlighting',
    description: '',
    icon: FaUsers,
  },
];
