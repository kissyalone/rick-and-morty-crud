<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Personagem extends Model
{
    protected $table = 'personagens';
    protected $fillable = [
        'name',
        'species',
        'image',
        'url',
    ];
    /**
     * Relação muitos para um
     * Muitos personagens pertence a um usuario
     */
    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
