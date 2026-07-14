import { create } from "zustand"

interface AdminUser {
  id: string
  email: string
  name: string
  role: string
}

interface AdminStore {
  currentUser: AdminUser | null
  isLoading: boolean
  setCurrentUser: (user: AdminUser | null) => void
  setLoading: (loading: boolean) => void
}

export const useAdminStore = create<AdminStore>((set) => ({
  // MUST be null — never default to a user object
  currentUser: null,
  isLoading: true,
  setCurrentUser: (user) => set({ currentUser: user }),
  setLoading: (loading) => set({ isLoading: loading }),
}))
