import { SetMetadata } from '@nestjs/common';

export const PERMISSION_KEY = 'permissions';

/**
 * @param action The action to check (e.g., 'moderate', 'publish', 'delete')
 * @param resource The resource type (e.g., 'story', 'moderator', 'admin-dashboard')
 */
export const PermissionsCerbos = (action: string, resource: string) =>
    SetMetadata(PERMISSION_KEY, { action, resource });