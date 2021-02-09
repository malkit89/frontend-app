import PersonProvider from './person_provider';
import MessageProvider from './message_provider';
import MyApi from '@/api';

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const PersonService = new PersonProvider('person');
export const MessageService = new MessageProvider('message');
export const CiclaturaService = MyApi.ciclaturaApi();
