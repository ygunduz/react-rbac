export interface Permission {
    id?: number;
    screen?: string;
    action?: string;
}
export interface Role {
    id?: number;
    code?: string;
    name?: string;
    permissions?: ReadonlyArray<Permission>;
}
