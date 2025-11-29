import { User, Channel, Message, AttendanceStat } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Md Amaan',
  email: 'amaan@example.com',
  avatar: 'https://picsum.photos/100/100',
  status: 'online',
  role: 'User'
};

export const MOCK_USERS: User[] = [
  { id: 'u2', name: 'Sam Sameer', email: 'sam@test.com', avatar: 'https://picsum.photos/101/101', status: 'offline', role: 'User' },
  { id: 'u3', name: 'Rakesh Sharma', email: 'rakesh@test.com', avatar: 'https://picsum.photos/102/102', status: 'busy', role: 'Admin' },
  { id: 'u4', name: 'Sofia Davis', email: 'sofia@test.com', avatar: 'https://picsum.photos/103/103', status: 'online', role: 'User' },
];

export const CHANNELS: Channel[] = [
  { id: 'c1', name: 'Work Link Testing', type: 'public' },
  { id: 'c2', name: 'test channel', type: 'public' },
  { id: 'c3', name: 'new channel', type: 'public', unreadCount: 2 },
  { id: 'c4', name: 'Testing 2.0', type: 'private' },
  { id: 'c5', name: 'General', type: 'public' },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', senderId: 'u2', content: 'Hey everyone, is the new build ready?', timestamp: '10:30 AM', isMe: false },
  { id: 'm2', senderId: 'u1', content: 'Yes, just deployed it to staging.', timestamp: '10:32 AM', isMe: true },
  { id: 'm3', senderId: 'u2', content: 'Great! I will check it out.', timestamp: '10:33 AM', isMe: false },
  { id: 'm4', senderId: 'u1', content: 'again', timestamp: '4:30 PM', isMe: true },
  { id: 'm5', senderId: 'u1', content: 'hello', timestamp: '4:31 PM', isMe: true },
];

export const STATS: AttendanceStat[] = [
  { label: 'Available', value: 0, icon: 'CheckCircle', color: 'text-emerald-500' },
  { label: 'On Break', value: 0, icon: 'Coffee', color: 'text-brand-500' },
  { label: 'In Meeting', value: 1, icon: 'Video', color: 'text-purple-500' },
  { label: 'Offline', value: 4, icon: 'Circle', color: 'text-slate-500' },
];