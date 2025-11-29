export enum ViewState {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy' | 'away';
  role: 'Admin' | 'User';
}

export interface Channel {
  id: string;
  name: string;
  type: 'public' | 'private';
  unreadCount?: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isMe: boolean;
}

export interface AttendanceStat {
  label: string;
  value: number;
  icon: string; // Icon name reference
  color: string;
}