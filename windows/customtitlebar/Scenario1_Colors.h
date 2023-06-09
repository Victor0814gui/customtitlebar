//*********************************************************
//
// Copyright (c) Microsoft. All rights reserved.
// This code is licensed under the MIT License (MIT).
// THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY
// IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR
// PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.
//
//*********************************************************

#pragma once

// #include "Scenario1_Colors.g.h"
#include "App.h"

namespace winrt
{
    // Used by binding.
    hstring to_hstring(Windows::Foundation::IReference<Windows::UI::Color> const& value);
}

namespace winrt::customtitlebar::implementation
{
    struct Scenario1_Colors : Scenario1_ColorsT<Scenario1_Colors>
    {
        Scenario1_Colors();

        Windows::UI::ViewManagement::ApplicationViewTitleBar TitleBar()
        {
            return titleBar;
        }

        event_token PropertyChanged(Windows::UI::Xaml::Data::PropertyChangedEventHandler const& handler);
        void PropertyChanged(event_token const& token) noexcept;

        void UseCustomColors_Click(Windows::Foundation::IInspectable const& sender, Windows::UI::Xaml::RoutedEventArgs const& e);

    private:
        Windows::UI::ViewManagement::ApplicationViewTitleBar titleBar{ nullptr };
        event<Windows::UI::Xaml::Data::PropertyChangedEventHandler> m_propertyChanged;

        void UpdateColors();
    };
}

namespace winrt::customtitlebar::factory_implementation
{
    struct Scenario1_Colors : Scenario1_ColorsT<Scenario1_Colors, implementation::Scenario1_Colors>
    {
    };
}
