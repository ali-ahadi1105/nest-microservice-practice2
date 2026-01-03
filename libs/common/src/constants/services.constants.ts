export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth_service',
  USERS_SERVICE: 'users-service',
  TICKETS_SERVICE: 'tickets-service',
  EVENTS_SERVICE: 'events-service',
  PAYMENTS_SERVICE: 'payments-service',
  NOTIFICATIONS_SERVICE: 'notifications-service',
} as const;

export const SERVICE_PORTS = {
  [SERVICES.API_GATEWAY]: 3000,
  [SERVICES.AUTH_SERVICE]: 3001,
  [SERVICES.USERS_SERVICE]: 3002,
  [SERVICES.TICKETS_SERVICE]: 3003,
  [SERVICES.EVENTS_SERVICE]: 3004,
  [SERVICES.PAYMENTS_SERVICE]: 3005,
  [SERVICES.NOTIFICATIONS_SERVICE]: 3006,
} as const;
