<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Spryker Marketplace License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\DashboardMerchantPortalGui;

use Spryker\Zed\Kernel\AbstractBundleDependencyProvider;
use Spryker\Zed\Kernel\Container;

class DashboardMerchantPortalGuiDependencyProvider extends AbstractBundleDependencyProvider
{
    /**
     * @var string
     */
    public const PLUGINS_DASHBOARD_CARD = 'PLUGINS_DASHBOARD_CARD';

    public function provideCommunicationLayerDependencies(Container $container): Container
    {
        $container = $this->addDashboardCardPlugins($container);

        return $container;
    }

    protected function addDashboardCardPlugins(Container $container): Container
    {
        $container->set(static::PLUGINS_DASHBOARD_CARD, function () {
            return $this->getDashboardCardPlugins();
        });

        return $container;
    }

    /**
     * @return array<\Spryker\Zed\DashboardMerchantPortalGuiExtension\Dependency\Plugin\MerchantDashboardCardPluginInterface>
     */
    protected function getDashboardCardPlugins(): array
    {
        return [];
    }
}
