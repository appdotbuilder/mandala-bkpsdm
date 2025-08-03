<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);

        // Create sample data
        \App\Models\Asset::factory(20)->create();
        \App\Models\Activity::factory(15)->create();
        \App\Models\AssetLease::factory(10)->create();
    }
}
