<?php

namespace Database\Factories;

use App\Models\Asset;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AssetLease>
 */
class AssetLeaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $borrowDate = fake()->dateTimeBetween('-2 months', '+1 month');
        $returnDeadline = fake()->dateTimeBetween($borrowDate, '+3 months');
        
        return [
            'asset_id' => Asset::factory(),
            'user_id' => User::factory(),
            'borrower_name' => fake()->name(),
            'borrow_date' => $borrowDate,
            'return_deadline' => $returnDeadline,
            'actual_return_date' => fake()->optional(0.3)->dateTimeBetween($borrowDate, $returnDeadline),
            'status' => fake()->randomElement(['aktif', 'dikembalikan', 'terlambat']),
            'notes' => fake()->optional()->sentence(),
        ];
    }
}