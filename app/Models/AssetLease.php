<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\AssetLease
 *
 * @property int $id
 * @property int $asset_id
 * @property int $user_id
 * @property string $borrower_name
 * @property \Illuminate\Support\Carbon $borrow_date
 * @property \Illuminate\Support\Carbon $return_deadline
 * @property \Illuminate\Support\Carbon|null $actual_return_date
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Asset $asset
 * @property-read \App\Models\User $user
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease query()
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereActualReturnDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereAssetId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereBorrowDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereBorrowerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereReturnDeadline($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssetLease whereUserId($value)
 * @method static \Database\Factories\AssetLeaseFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class AssetLease extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'asset_id',
        'user_id',
        'borrower_name',
        'borrow_date',
        'return_deadline',
        'actual_return_date',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'borrow_date' => 'date',
        'return_deadline' => 'date',
        'actual_return_date' => 'date',
    ];

    /**
     * Get the asset that is being leased.
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the user who created the lease.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}