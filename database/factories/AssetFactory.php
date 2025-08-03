<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(3, true),
            'description' => fake()->sentence(),
            'category' => fake()->randomElement(['Kendaraan', 'Elektronik', 'Furniture', 'Alat Tulis']),
            'condition' => fake()->randomElement(['baik', 'rusak ringan', 'rusak berat']),
            'purchase_price' => fake()->randomFloat(2, 100000, 50000000),
            'purchase_date' => fake()->dateTimeBetween('-5 years', 'now'),
            'location' => fake()->randomElement(['Ruang A', 'Ruang B', 'Gudang', 'Kantor Utama']),
            'status' => fake()->randomElement(['tersedia', 'dipinjam', 'maintenance']),
        ];
    }
}