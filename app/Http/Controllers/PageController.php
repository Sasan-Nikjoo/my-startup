<?php
namespace App\Http\Controllers;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()   { return Inertia::render('home'); }
    public function about()  { return Inertia::render('about'); }
    public function services(){ return Inertia::render('services'); }
    public function contact(){ return Inertia::render('contact'); }
}