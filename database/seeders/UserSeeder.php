<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create default admin users
        User::create([
            'name' => 'Super Admin',
            'email' => 'admin@bkpsdm.go.id',
            'nip' => 'admin',
            'level' => 'superadmin',
            'password' => Hash::make('@Ptx4869'),
            'email_verified_at' => now(),
        ]);

        User::create([
            'name' => 'Manager',
            'email' => 'manager@bkpsdm.go.id',
            'nip' => 'manager',
            'level' => 'manager',
            'password' => Hash::make('@Ptx4869'),
            'email_verified_at' => now(),
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@bkpsdm.go.id',
            'nip' => 'user',
            'level' => 'user',
            'password' => Hash::make('@Ptx4869'),
            'email_verified_at' => now(),
        ]);

        // Create additional test users
        User::factory(10)->create();
    }
}