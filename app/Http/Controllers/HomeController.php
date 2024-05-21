<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{

    // render landing page
    public function home() {
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(12);
        $new_plans = Plan::with('images')->orderBy('id', 'desc')->limit(4)->get();
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }

    // plan show
    public function planshow($id) {
        $plan = Plan::where("id", $id)->with('images')->first();
        // popular algo plan
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(8);
        return Inertia::render('Plan',['plan' => $plan, 'plans' => $plans]);
    }

    // dedicated page for listing all plnas with pagination
    public function plans() {
        $plans = Plan::with('images')->orderBy('id', 'desc')->paginate(20);
        $new_plans = Plan::with('images')->orderBy('id', 'desc')->limit(4)->get();
        return Inertia::render('Plans', [
            'plans' => $plans,
            'new_plans' => $new_plans,
        ]);
    }
}
