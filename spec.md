# FunHub Live

## Current State
App has coin system, daily rewards, spin wheel, VIP membership (UPI payment), live chat, 5 games, admin panel, and profile features. Backend Candid is outdated - only 11 methods deployed. All newer methods (updateProfile, claimAdmin, grantVIP, admin panel, chat images, profile) fail silently because the Candid interface is missing them.

## Requested Changes (Diff)

### Add
- `claimAdminByPhone(phone)` - admin can claim privileges by entering their special phone number (9022892295) even on a new device/browser
- All missing backend methods need to be properly compiled and deployed

### Modify
- `updateProfile(bio, avatarUrl)` - should auto-create profile if not exists (no trap on null)
- `sendMessage(text)` - single text arg, image URLs embedded as `__IMG__<url>` prefix in text
- `registerUser(username, phone)` - registers with phone, grants admin if phone == 9022892295
- Frontend admin panel to show "Phone se Admin Login" section for non-admins

### Remove
- Nothing removed

## Implementation Plan
1. Regenerate backend with all methods: registerUser(username, phone), updateProfile(bio, avatarUrl), claimAdminByPhone(phone), sendMessage(text), getProfile returning full ProfileView with phone/isAdmin/bio/avatarUrl, admin methods (getAllUsers, getAppStats, clearMessages, grantVIPToUser, addCoinsToUser), games, leaderboard
2. Update frontend to use correct method signatures
3. Deploy
